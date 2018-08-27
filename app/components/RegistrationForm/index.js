import React from 'react';
import {Alert, Button, Form, FormGroup, FormText, Input, Label,} from 'reactstrap';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {makeSelectCurrentUser} from 'containers/App/selectors';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import $ from 'jquery';
import firestore from 'database/store';
import LoginButton from 'components/LoginButton';
import axios from 'axios';

import {generateRequestUrl} from 'utils/davisClassUtils';

const FormTitle = styled.div`
  margin-bottom: 2em;
`;

/* eslint-disable react/prefer-stateless-function */
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);

    this.validationMap = {
      takingClasses: this.validateClassSchedule,
      classScheduleImage: this.uploadToImgur,
    };

    this.state = {
      success: false,
    };
  }

  getEmailName = email => email.substring(0, email.lastIndexOf('@'));

  uploadToImgur = element => {
    if ($('#storedImage').val()) {
      const obj = JSON.parse($('#storedImage').val());

      const apiUrl = 'https://api.imgur.com/3/image/';
      const apiKey = '37f4a3916864230';
      console.log('Deletion:', `${apiUrl}${obj.deleteHash}`);
      const settings = {
        crossDomain: true,
        processData: false,
        contentType: false,
        type: 'DELETE',
        url: `${apiUrl}${obj.deleteHash}`,
        headers: {
          Authorization: `Client-ID ${apiKey}`,
          Accept: 'application/json',
        },
        mimeType: 'multipart/form-data',
      };

      $.ajax(settings).done(resp => {
        // noop
        console.log('Deletion', resp);
      });
    }

    return new Promise((resolve, reject) => {
      const $files = element.get(0).files;

      if ($files.length) {
        // Reject big files
        if ($files[0].size > element.data('max-size') * 1024) {
          console.log('Please select a smaller file');
          return false;
        }

        // Begin file upload
        console.log('Uploading file to Imgur..');

        // Replace ctrlq with your own API key
        const apiUrl = 'https://api.imgur.com/3/image';
        const apiKey = '37f4a3916864230';

        const settings = {
          crossDomain: true,
          processData: false,
          contentType: false,
          type: 'POST',
          url: apiUrl,
          headers: {
            Authorization: `Client-ID ${apiKey}`,
            Accept: 'application/json',
          },
          mimeType: 'multipart/form-data',
        };

        const formData = new FormData();
        formData.append('image', $files[0]);
        settings.data = formData;

        // Response contains stringified JSON
        // Image URL available at response.data.link
        $.ajax(settings).done(resp => {
          const response = JSON.parse(resp).data;
          $('#storedImage').val(
            JSON.stringify({
              id: response.id,
              deleteHash: response.deletehash,
            }),
          );
          resolve();
        });
      }
    });
  };

  validateClassSchedule = element => {
    const schedule = /[0-9]+/g;
    const results = element
      .val()
      .match(schedule)
      .filter((v, i, a) => a.indexOf(v) === i);
    const getList = results.map(crn =>
      generateRequestUrl(crn, this.props.signUpTerm.termInfo.termCode),
    );

    return new Promise((resolve, reject) => {
      axios.all(getList).then(
        resp => {
          const locationList = [];
          const failedList = [];
          let noScript = true;
          resp.forEach((r, i) => {
            const elem = $.parseHTML(r.data, document, true);
            if ($(elem).filter('script').length) {
              noScript = false;
              failedList.push(results[i]);
            } else {
              const baseElement = $(elem)
                .find('strong:contains("Meeting Times:")')
                .parent()
                .parent()
                .parent()
                .children();

              baseElement.each((index, item) => {
                if (index === 0) {
                  return;
                }

                let baseTime = '';

                $(item)
                  .find('td')
                  .each((ind, it) => {
                    if (ind === 2) {
                      return;
                    }
                    baseTime += $(it).text();
                  });
                locationList.push(
                  `${results[i]};${baseTime.replace(/\s/g, '')}`,
                );
              });
            }
          });
          if (noScript === true) {
            $('#takingClasses').removeClass('is-invalid');
            $('#currentClassesAlert').hide();
            $('#scheduleTimes').val(locationList.join('|'));
            resolve();
          } else {
            reject();
            $('#takingClasses').addClass('is-invalid');
            $('#currentClassesAlert')
              .text(`Invalid CRNs: ${failedList.join(',')}`)
              .removeAttr('hidden')
              .show();
            $('html, body').animate(
              {
                scrollTop: $('#takingClasses').offset().top,
              },
              200,
            );
          }
        },
        _ => {
          reject();
        },
      );
    });
  };

  processFormData = e => {
    const mapObj = this.validationMap;
    e.preventDefault();

    $('#regFormSubmit')
      .text('Submitting... (May take some time)')
      .attr('disabled', true);

    const validationChecks = [];
    $('#RegistrationForm input').each(function() {
      const input = $(this); // This is the jquery object of the input, do what you will
      const id = input.attr('id');
      if (id in mapObj) {
        validationChecks.push(mapObj[id](input));
      }
    });

    Promise.all(validationChecks)
      .then(
        _ => {
          const formObject = {};

          $('#RegistrationForm input').each(function() {
            const input = $(this); // This is the jquery object of the input, do what you will
            if (input.attr('ignored')) {
              return;
            }
            const id = input.attr('id');
            let value = input.val() || input.attr('placeholder') || '';
            if (input.attr('type') === 'number' && value && value.length > 0) {
              value = parseFloat(value);
            }

            formObject[id] = value;
          });

          const { givenEmail, term } = formObject;
          const documentTag = this.getEmailName(givenEmail);

          firestore
            .collection('registration')
            .doc(term.toLowerCase())
            .collection('applications')
            .doc(documentTag.toLowerCase())
            .set(formObject);
          this.setState({ success: true });
        },
        _ => {
          // Noop, since it was rejected
        },
      )
      .finally(() => {
        $('#regFormSubmit')
          .text('Submit')
          .attr('disabled', false);
      });
  };

  populateFields = props => {
    $('#regFormSubmit')
      .text('Submit')
      .attr('disabled', false);

    const term = props.signUpTerm.short;
    const documentTag = this.getEmailName(props.currentUser.email);

    firestore
      .collection('registration')
      .doc(term.toLowerCase())
      .collection('applications')
      .doc(documentTag.toLowerCase())
      .get()
      .then(doc => {
        if (doc.exists) {
          $('#RegistrationForm input').each(function() {
            const input = $(this); // This is the jquery object of the input, do what you will
            const id = input.attr('id');
            const serverValue = doc.data()[id];
            const value = input.val() || '';

            if (value === '') {
              input.val(serverValue);
            }
          });

          if ($('#storedImage').val()) {
            $('#classScheduleImage')
              .attr('required', false)
              .attr('title', 'Using previously uploaded image');
          }
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.success && !this.state.success) {
      this.populateFields(this.props);
    }
  }
  componentWillReceiveProps = nextProps => {
    if (
      this.props.signUpTerm === null &&
      nextProps.signUpTerm !== null &&
      nextProps.currentUser !== null
    ) {
      this.populateFields(nextProps);
    }
  };

  componentDidMount() {}

  render() {
    if (
      !this.state.success &&
      this.props.currentUser &&
      this.props.signUpTerm
    ) {
      return (
        <div id="RegistrationForm">
          <FormTitle>
            <h1>ECS 197T {this.props.signUpTerm.full}</h1>
            <h5>Application for Computer Science Tutoring</h5>
            <h6>Required fields are marked with a *</h6>
          </FormTitle>
          <FormText color="muted">
            <ul>
              <li>
                You may volunteer instead of taking up units. If you do, there
                is no minimum hour count and you may tutor whenever you like. We
                are also quite flexible on GPA requirements if you don't want
                units for tutoring.
              </li>
              <li>
                If you sign up for units, you must have over a 3.0 Cumulative CS
                GPA and at least a B+ or more in the classes you would like to
                tutor. Additionally, you are required to host at least one
                review session for any class of your choice!{' '}
              </li>
              <li>
                {' '}
                Here are the minimum hour requirements (if you sign up for
                units):{' '}
                <ul>
                  <li>1 unit = 3 hours/week</li>
                  <li>2 units = 6 hours/week</li>
                </ul>
              </li>
            </ul>
          </FormText>
          <Form onSubmit={e => this.processFormData(e)}>
            <FormGroup>
              <Label for="givenName">Registered Name</Label>
              <Input
                placeholder={this.props.currentUser.displayName}
                name="givenName"
                id="givenName"
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder={this.props.signUpTerm.short.toLowerCase()}
                name="term"
                id="term"
                disabled
                hidden
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder={0.1}
                name="version"
                id="version"
                disabled
                hidden
              />
            </FormGroup>
            <FormGroup>
              <Label for="givenEmail">Registered Email</Label>
              <Input
                placeholder={this.props.currentUser.email}
                name="givenEmail"
                id="givenEmail"
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="logOutLabel">Not You?</Label>
              <br />
              <LoginButton />
            </FormGroup>
            <FormGroup>
              <Label for="customName">
                What should we call you, if different than above?
              </Label>
              <Input type="text" name="customName" id="customName" />
            </FormGroup>
            <FormGroup>
              <Label for="commonEmail">
                What is the best email to reach you, if different from above?
              </Label>
              <Input name="commonEmail" id="commonEmail" type="email" />
              <small id="commonEmailHelp" className="form-text text-muted">
                This should be whichever email address you check most
                frequently, as we&apos;ll be sending time-sensitive emails
                occasionally.
              </small>
            </FormGroup>
            <FormGroup>
              <Label for="idNumber">Student ID Number? * </Label>
              <Input name="idNumber" id="idNumber" type="number" required />
            </FormGroup>
            <FormGroup>
              <Label for="takingClasses">
                What are the CRNs for the classes you will take in{' '}
                {this.props.signUpTerm.full}? *{' '}
              </Label>
              <Input
                name="takingClasses"
                id="takingClasses"
                required
                type="text"
              />
              <small id="takingClassesHelp" className="form-text text-muted">
                Example: 25636, 78098, 43503. Make sure these match up wih the
                schedule you email us (described below). You can find these
                function{' '}
                <a
                  target="_blank"
                  href="https://my.ucdavis.edu/schedulebuilder/index.cfm?sb"
                >
                  ScheduleBuilder.
                </a>
              </small>
              <Alert id="currentClassesAlert" hidden color="danger" />
            </FormGroup>
            <FormGroup>
              <Label for="classScheduleImage">
                Please attach a screenshot of your schedule for{' '}
                {this.props.signUpTerm.full}. *{' '}
              </Label>
              <Input
                name="classScheduleImage"
                id="classScheduleImage"
                required
                type="file"
                accept="image/*"
                data-max-size="5000"
                ignored="true"
              />
              <small id="takingClassesHelp" className="form-text text-muted">
                Since tutors meet once a week, we'd like to meet at a time when
                most of the tutors can attend. In order to find a good meeting
                time, please attach a screenshot of your current{' '}
                {`${this.props.signUpTerm.full}`} schedule as seen on{' '}
                <a
                  target="_blank"
                  href="https://my.ucdavis.edu/schedulebuilder/index.cfm?sb"
                >
                  ScheduleBuilder.
                </a>{' '}
                If your schedule changes (class swap, getting off waitlist),
                please revisit this form and update your CRNs and class
                schedule.
              </small>
            </FormGroup>
            <FormGroup>
              <Input
                name="storedImage"
                id="storedImage"
                disabled
                json="true"
                hidden
              />
            </FormGroup>
            <FormGroup>
              <Input name="scheduleTimes" id="scheduleTimes" disabled hidden />
            </FormGroup>
            <FormGroup>
              <Label for="tutoredClasses">
                Which CS classes would you like to tutor for? *{' '}
              </Label>
              <Input
                name="tutoredClasses"
                id="tutoredClasses"
                required
                type="text"
              />
              <small id="tutoredClassesHelp" className="form-text text-muted">
                Example: 10, 20, 50. Please only include classes that you feel
                comfortable tutoring. It is important that you feel confident
                tutoring a particular class. You must also have received at
                least a B+ in order to tutor for that class.
              </small>
            </FormGroup>
            <FormGroup>
              <Label for="gpa">What is your cumulative CS GPA? *</Label>
              <Input name="gpa" id="gpa" required type="number" step="0.01"/>
              <small id="gpaHelp" className="form-text text-muted">
                Must be a 3.0 or higher. You can find your CS GPA by going to
                <a target="_blank" href="https://oasis.ucdavis.edu">
                  {' '}
                  oasis.ucdavis.edu.{' '}
                </a>
                Look specifically under GPA Charts & Tools > GPA Per Subject and
                report your CS GPA. This will be subject to verification by the
                CS Department.
              </small>
              <small id="gpaHelpNote" className="form-text text-muted">
                {
                  "If your CS GPA is on the edge (< 3.0) but you'd still like to tutor, please email us (ucdcstutoring@gmail.com) after completing this application. Please make sure you are only tutoring for classes in which you received at least a B+. This will make it more likely for you to be accepted."
                }
              </small>
            </FormGroup>
            <FormGroup>
              <Label for="anythingElse">
                Anything you would like us to know?
              </Label>
              <Input name="anythingElse" id="anythingElse" type="text" />
            </FormGroup>
            <br />
            <Button id="regFormSubmit">Submit</Button>
          </Form>
        </div>
      );
    } else if (
      this.state.success &&
      this.props.currentUser &&
      this.props.signUpTerm
    ) {
      return (
        <div id="RegistrationForm">
          Thanks for applying to be a tutor! Students really appreciate the
          help, and we look forward to working with you next quarter. We'll be
          in touch within two weeks of the start of the quarter.
          <br />
          <br />
          <Button
            id="editForm"
            onClick={() => {
              this.setState({ success: false });
            }}
          >
            Edit Your Application
          </Button>
        </div>
      );
    } else if (!this.props.currentUser && this.props.signUpTerm) {
      return (
        <div>
          <LoginButton />
        </div>
      );
    }
    return <div>I'm a loadin', gimmie a second</div>;
  }
}

RegistrationForm.propTypes = {
  currentUser: PropTypes.object,
  signUpTerm: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(RegistrationForm);
