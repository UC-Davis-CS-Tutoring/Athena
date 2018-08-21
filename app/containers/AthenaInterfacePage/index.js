/**
 * AthenaInterfacePage
 *
 * This is the main client interface page for Athena
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import 'bootstrap/dist/css/bootstrap.css';

import injectReducer from 'utils/injectReducer';
// import injectSaga from 'utils/injectSaga';
// import {
//   makeSelectRepos,
//   makeSelectLoading,
//   makeSelectError,
// } from 'containers/App/selectors';
// import H2 from 'components/H2';
// import ReposList from 'components/ReposList';
// import AtPrefix from './AtPrefix';
// import CenteredSection from './CenteredSection';
// import Form from './Form';
// import Input from './Input';
// import Section from './Section';
import messages from './messages';
// import { loadRepos } from '../App/actions';
import reducer from './reducer';
// import saga from './saga';

import H1 from 'components/H1';
import LoginButton from 'components/LoginButton';

import { makeSelectCurrentUser } from 'containers/App/selectors';

import functions from 'database/functions';

// import { makeSelectCurrentUser } from "./selectors";

// import auth from 'database/auth';
// import {makeSelectUsername} from "../HomePage/selectors";
// import {HomePage} from "../HomePage";
// import {loadRepos} from "../App/actions";

// import {changeUsername} from "../HomePage/actions";
// import PropTypes from "prop-types";

class AthenaInterfacePage extends React.Component {
  render() {
    const timestamp = functions.httpsCallable('getTimeStamp');

    console.log(this.props);
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <div>
          <H1>
            <FormattedMessage {...messages.header} />
          </H1>
          {/* {this.props.user.displayName} */}
          <LoginButton />
        </div>
      </div>
    );
  }
}

AthenaInterfacePage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  // repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  // onSubmitForm: PropTypes.func,
  // username: PropTypes.string,
  // onChangeUsername: PropTypes.func,
};

// export default AthenaInterfacePage;
//
export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    // onSubmitForm: evt => {
    //   if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    //   dispatch(loadRepos());
    // },
  };
}
//
const mapStateToProps = createStructuredSelector({
  // repos: makeSelectRepos(),
  user: makeSelectCurrentUser(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});
//
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'athenaInterfacePage', reducer });
// const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(AthenaInterfacePage);
