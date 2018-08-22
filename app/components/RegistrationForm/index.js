import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import $ from 'jquery';
import firestore from 'database/store';
import LoginButton from 'components/LoginButton';
const FormTitle = styled.div`
  margin-bottom: 2em;
`;

/* eslint-disable react/prefer-stateless-function */
class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
  }

  getEmailName = email => email.substring(0, email.lastIndexOf('@'));

  getAllFormData = e => {
    e.preventDefault();
    const formObject = {};
    $('#RegistrationForm input').each(function() {
      const input = $(this); // This is the jquery object of the input, do what you will
      let value = input.val() || input.attr('placeholder') || '';
      if (input.attr('type') === 'number' && value && value.length > 0) {
        value = parseFloat(value);
      }
      const id = input.attr('id');
      formObject[id] = value;
    });

    const { givenEmail, term } = formObject;
    const documentTag = this.getEmailName(givenEmail);

    console.log(formObject);

    firestore
      .collection('registration')
      .doc(term.toLowerCase())
      .collection('applications')
      .doc(documentTag.toLowerCase())
      .set(formObject);
  };

  render() {
    if (this.props.currentUser && this.props.signUpTerm) {
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
                  <li>1 unit = 3 hours/week</li> <li>2 units = 6 hours/week</li>
                </ul>
              </li>
            </ul>
          </FormText>
          <Form onSubmit={e => this.getAllFormData(e)}>
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
                placeholder={this.props.signUpTerm.short}
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
                What classes will you take in {this.props.signUpTerm.full}? *{' '}
              </Label>
              <Input
                name="takingClasses"
                id="takingClasses"
                required
                type="text"
              />
              <small id="takingClassesHelp" className="form-text text-muted">
                Example: 60, 154A, 122A
              </small>
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
              <Input name="gpa" id="gpa" required type="number" />
              <small id="gpaHelp" className="form-text text-muted">
                Must be a 3.0 or higher. You can find your CS GPA by going to
                <a href="https://oasis.ucdavis.edu"> oasis.ucdavis.edu. </a>
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
              <Input name="commonEmail" id="commonEmail" type="text" />
              <small id="commonEmailHelp" className="form-text text-muted">
                This should be whichever email address you check most
                frequently, as we&apos;ll be sending time-sensitive emails
                occasionally.
              </small>
            </FormGroup>
            <h4>[Action Required] Scheduled Meetings</h4>
            <FormText color="muted">
              Since tutors meet once a week, we'd like to meet at a time when
              most of the tutors can attend. In order to find a good meeting
              time, please send a screenshot of your current{' '}
              {`${this.props.signUpTerm.full}`} schedule as seen on Schedule
              Builder to ucdcstutoring@gmail.com with your name and ID. We'll
              adjust accordingly if you swap classes later on or get off from a
              waitlisted class
            </FormText>
            <br />
            <Button>Submit</Button>
          </Form>
        </div>
      );
    }
    return (
      <div>
        <LoginButton />
      </div>
    );
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
