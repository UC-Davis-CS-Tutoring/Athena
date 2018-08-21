import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormTitle = styled.div`
  margin-bottom: 2em;
`;

/* eslint-disable react/prefer-stateless-function */
class RegistrationForm extends React.Component {
  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <FormTitle>
            <h1>ECS 197T {this.props.signUpTerm}</h1>
            <h5>Application for Computer Science Tutoring</h5>
            <h6>Required fields are marked with a *</h6>
          </FormTitle>
          <Form>
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
              <Label for="givenEmail">Registered Email</Label>
              <Input
                placeholder={this.props.currentUser.email}
                name="givenEmail"
                id="givenEmail"
                disabled
              />
            </FormGroup>
            <FormGroup>
              <Label for="customName">What should we call you, if different than above?</Label>
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
              <Input name="idNumber" id="idNumber" required type="number" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Select</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelectMulti">Select Multiple</Label>
              <Input
                type="select"
                name="selectMulti"
                id="exampleSelectMulti"
                multiple
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option one is this and
                  that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" /> Option two can be
                  something something else and selecting it will deselect option
                  one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled /> Option three is
                  disabled
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" /> Check me out
              </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      );
    }
    return <div />;
  }
}

RegistrationForm.propTypes = {
  currentUser: PropTypes.object,
  signUpTerm: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(RegistrationForm);
