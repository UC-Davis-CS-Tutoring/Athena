import 'firebase/firestore';
import 'firebase/database';
import firebase from './base';

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

export default firestore;
