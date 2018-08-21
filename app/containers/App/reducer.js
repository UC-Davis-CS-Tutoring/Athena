/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import { ATHENA_SIGN_OUT, ATHENA_SIGN_IN } from './constants';

// The initial state of the App
// const initialState = fromJS({
//   loading: false,
//   error: false,
//   currentUser: false,
//   userData: {
//     repositories: false,
//   },
// });
//
// function appReducer(state = initialState, action) {
//   switch (action.type) {
//     case LOAD_REPOS:
//       return state
//         .set('loading', true)
//         .set('error', false)
//         .setIn(['userData', 'repositories'], false);
//     case LOAD_REPOS_SUCCESS:
//       return state
//         .setIn(['userData', 'repositories'], action.repos)
//         .set('loading', false)
//         .set('currentUser', action.username);
//     case LOAD_REPOS_ERROR:
//       return state.set('error', action.error).set('loading', false);
//     default:
//       return state;
//   }
// }

const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: null,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case ATHENA_SIGN_OUT:
      return state.set('currentUser', null);
    case ATHENA_SIGN_IN:
      return state.set('currentUser', action.person);
    default:
      return state;
  }
}
export default appReducer;
