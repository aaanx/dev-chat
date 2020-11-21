import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDUy5mGK38InqV7CwkLafULgvWJexGw8-k",
  authDomain: "dev-chat-b096f.firebaseapp.com",
  databaseURL: "https://dev-chat-b096f.firebaseio.com",
  projectId: "dev-chat-b096f",
  storageBucket: "dev-chat-b096f.appspot.com",
  messagingSenderId: "780170233681",
  appId: "1:780170233681:web:082d28c34f9963a4ccf570",
};

const fire = firebase.initializeApp(config);
export default fire;
