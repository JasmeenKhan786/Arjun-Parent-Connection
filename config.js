import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBjlWSzDLufJwteq_obcjG8v-lhDATsHlQ",
    authDomain: "parentconnection-13aac.firebaseapp.com",
    projectId: "parentconnection-13aac",
    storageBucket: "parentconnection-13aac.appspot.com",
    messagingSenderId: "110556647847",
    appId: "1:110556647847:web:daa181a762a0def0caa682"
  };
firebase.initializeApp(firebaseConfig);
export default firebase.firestore()
