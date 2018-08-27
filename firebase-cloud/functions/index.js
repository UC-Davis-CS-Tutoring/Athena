/**
 * Copyright 2017 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START presence_sync_function]
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const moment = require('moment');
const axios = require('axios');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jquery')(window);

const cors = require('cors')({
  origin: true,
});

admin.initializeApp();

// Since this code will be running in the Cloud Functions enviornment
// we call initialize Firestore without any arguments because it
// detects authentication from the environment.
const firestore = admin.firestore();

const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

// Create a new function which is triggered on changes to /status/{uid}
// Note: This is a Realtime Database trigger, *not* Cloud Firestore.
// exports.onUserStatusChanged = functions.database.ref('/status/{uid}').onUpdate(
//   async (change, context) => {
//     // Get the data written to Realtime Database
//     const eventStatus = change.after.val();
//
//     // Then use other event data to create a reference to the
//     // corresponding Firestore document.
//     const userStatusFirestoreRef = firestore.doc(`status/${context.params.uid}`);
//
//     // It is likely that the Realtime Database change that triggered
//     // this event has already been overwritten by a fast change in
//     // online / offline status, so we'll re-read the current data
//     // and compare the timestamps.
//     const statusSnapshot = await change.after.ref.once('value');
//     const status = statusSnapshot.val();
//     console.log(status, eventStatus);
//     // If the current timestamp for this data is newer than
//     // the data that triggered this event, we exit this function.
//     if (status.last_changed > eventStatus.last_changed) {
//       return null;
//     }
//
//     // Otherwise, we convert the last_changed field to a Date
//     eventStatus.last_changed = new Date(eventStatus.last_changed);
//
//     // ... and write it to Firestore.
//     return userStatusFirestoreRef.set(eventStatus);
//   });
// // [END presence_sync_function]

function wrap(object) {
  return {data: object};
}

exports.getTimeStamp = functions.https.onRequest((req, res) => {
  // Forbidding PUT requests.
  if (req.method === 'PUT') {
    return res.status(403).send('Forbidden!');
  }

  return cors(req, res, () => {
    const date = moment().format('x');
    res.status(200).send(wrap(date));
  });
});

const baseUrl = 'https://registrar-apps.ucdavis.edu/courses/search/course.cfm';

function generateRequestUrl(crn, termCode) {
  const params = $.param({ crn, termCode });

  return axios.get(`${baseUrl}?${params}`);
}

exports.testFunction = functions.https.onRequest((req, res) => {
  if (!('crns' in req.query) || !('term' in req.query)) {
    return res.status(400).send('Missing parameter');
  }

  const crns = Array.isArray(req.query['crns'])
    ? req.query['crns']
    : [req.query['crns']];
  const getList = crns.map(crn => {
    generateRequestUrl(crn, req.params['term']);
  });

  return new Promise((resolve, reject) => {
    return cors(req, res, () => {
      res.status(200).send('hi');
    });
  });
});
