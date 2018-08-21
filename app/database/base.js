import firebase from 'firebase/app';

import prodConfig from './prod';

firebase.initializeApp(prodConfig);

export default firebase;
