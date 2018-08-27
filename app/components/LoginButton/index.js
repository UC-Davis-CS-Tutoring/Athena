import React from 'react';
import firebase from 'database/auth';
import {Button} from 'reactstrap';
import {createStructuredSelector} from 'reselect';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {makeSelectCurrentUser} from 'containers/App/selectors';
import PropTypes from 'prop-types';
// import messages from './messages';

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  hd: 'ucdavis.edu',
});

/* eslint-disable react/prefer-stateless-function */
class LoginButton extends React.Component {
  loginPopup() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // console.log(user);
        // ...
      })
      .catch(error => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  }

  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch(error => {
        // An error happened.
      });
  }
  render() {
    if (this.props.currentUser) {
      return <Button onClick={() => this.logOut()}>Log out!</Button>;
    }

    return <Button onClick={() => this.loginPopup()}>Log in!</Button>;
  }
}

LoginButton.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // onSubmitForm: PropTypes.func,
  currentUser: PropTypes.object,
  // onChangeUsername: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser(),
});

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(LoginButton);
