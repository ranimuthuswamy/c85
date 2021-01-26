import firebase from "firebase";
require("@firebase/firestore");
var firebaseConfig = {
  apiKey: "AIzaSyBhnOPMs2kB9W6nJ9ZyxStq2aMxBCTCOIQ",
  authDomain: "book-santa-da8de.firebaseapp.com",
  projectId: "book-santa-da8de",
  storageBucket: "book-santa-da8de.appspot.com",
  messagingSenderId: "57460307247",
  appId: "1:57460307247:web:1f69ae039f4ce5118e1dda",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
