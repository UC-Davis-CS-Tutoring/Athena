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
import RegistrationForm from 'components/RegistrationForm';

import { Container, Row, Col } from 'reactstrap';

// import saga from './saga';

import H1 from 'components/H1';
import LoginButton from 'components/LoginButton';
import { makeSelectCurrentUser } from 'containers/App/selectors';
import styled from 'styled-components';

import functions from 'database/functions';
import moment from 'moment';

// import { makeSelectCurrentUser } from "./selectors";

// import auth from 'database/auth';
// import {makeSelectUsername} from "../HomePage/selectors";
// import {HomePage} from "../HomePage";
// import {loadRepos} from "../App/actions";

// import {changeUsername} from "../HomePage/actions";
// import PropTypes from "prop-types";

const FormShadow = styled.div`
  // margin-left: -2em;
  // margin-right: -2em;
`;

const PageBackground = styled.div`

`;

const FormColumn = styled.div`
  background-color: white;
  padding: 2em;
`;

class AthenaRegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpTerm: null,
    };

    this.populateCurrentSignUpTerm();
  }

  // todo: move this out

  getMonthName(monthName, date) {
    switch (monthName) {
      case 'November':
      case 'December':
      case 'January':
      case 'February':
        return { term: 'Winter', year: date.add(2, 'month') };
      case 'March':
      case 'April':
        return { term: 'Spring', year: date };
      case 'May':
      case 'June':
      case 'July':
      case 'August':
      case 'September':
      case 'October':
        return { term: 'Fall', year: date };
    }
  }

  populateCurrentSignUpTerm() {
    const timestamp = functions.httpsCallable('getTimeStamp');
    timestamp()
      .then(result => {
        const term = moment(parseInt(result.data, 10));
        const resolvedObject = this.getMonthName(term.format('MMMM'), term);
        const usedDate = `${resolvedObject.term} ${resolvedObject.year.format(
          'YYYY',
        )}`;

        this.setState({ signUpTerm: usedDate });
      })
      .catch(error => {
        console.log('Could not get current term. TODO: show sadface.');
        console.log(error);
      });
  }

  render() {
    return (
      <PageBackground>
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <Container>
          <Row>
            <Col md={2} sm={1} />
            <Col>
              <FormColumn className="shadow">
                  <RegistrationForm signUpTerm={this.state.signUpTerm} />
              </FormColumn>
            </Col>
            <Col md={2} sm={1} />
          </Row>
        </Container>
      </PageBackground>
    );
  }
}

AthenaRegisterPage.propTypes = {
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
)(AthenaRegisterPage);
