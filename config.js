import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyBQawIbgDSO9UiRJRDc7FkG6QLpZB_1UYE',

  authDomain: 'otpverficationusingfirebase.firebaseapp.com',

  projectId: 'otpverficationusingfirebase',

  storageBucket: 'otpverficationusingfirebase.appspot.com',

  messagingSenderId: '946400954432',

  appId: '1:946400954432:web:f177e4c00171ae8c1f77a5',

  measurementId: 'G-KCX6YX5JMP',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
