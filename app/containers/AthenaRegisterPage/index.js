/**
 * AthenaInterfacePage
 *
 * This is the main client interface page for Athena
 */

import React from 'react';
// import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';

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
// import { loadRepos } from '../App/actions';
import reducer from './reducer';
import RegistrationForm from 'components/RegistrationForm';

import {Col, Container, Row} from 'reactstrap';
import {makeSelectCurrentUser} from 'containers/App/selectors';
import styled from 'styled-components';

import functions from 'database/functions';
import moment from 'moment';
import {getTermInfo} from 'utils/davisClassUtils';

// import saga from './saga';
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

const PageBackground = styled.div``;

const FormColumn = styled.div`
  background-color: white;
  padding: 2em;
`;

const centerColumnStyle = {
  paddingLeft: '10px',
  paddingRight: '10px',
};

class AthenaRegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpTerm: null,
    };

    this.populateCurrentSignUpTerm();
  }

  populateCurrentSignUpTerm() {
    const timestamp = functions.httpsCallable('getTimeStamp');
    timestamp()
      .then(result => {
        const term = moment(parseInt(result.data, 10));
        const resolvedObject = getTermInfo(term);
        const usedDate = `${resolvedObject.term} ${resolvedObject.year}`;

        const shortDate = `${resolvedObject.short}${resolvedObject.year}`;

        this.setState({
          signUpTerm: {
            full: usedDate,
            short: shortDate,
            termInfo: resolvedObject,
          },
        });
      })
      .catch(error => {
        console.log('Could not get current term. TODO: show sadface.');
        console.log(error);
        console.log('??');
      });
  }

  render() {
    return (
      <PageBackground>
        <Helmet>
          <title>Registration Form for ECS197T</title>
          <meta name="description" content="Sign up link for ECS 197T"/>
        </Helmet>
        <Container>
          <Row>
            <Col md={2} sm={1} />
            <Col md={8} sm={10} xs={12} style={centerColumnStyle}>
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
