/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import firebase from 'database/auth';

import {
  ATHENA_SIGN_IN,
  ATHENA_SIGN_OUT,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_REPOS_SUCCESS,
} from './constants';

// import { rtdb_and_local_fs_presence, fs_listen_online } from "database/presence";

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function athenaSignIn(person) {
  return {
    type: ATHENA_SIGN_IN,
    person,
  };
}

export function athenaSignOut() {
  return {
    type: ATHENA_SIGN_OUT,
  };
}

export function athenaSignInTrigger(dispatch) {
  console.log('Sign in trigger started');
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      console.log('USER FOUND:', user);
      // rtdb_and_local_fs_presence();
      // fs_listen_online();
      dispatch(athenaSignIn(user));
    } else {
      dispatch(athenaSignOut());
    }
  });
}

export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}
