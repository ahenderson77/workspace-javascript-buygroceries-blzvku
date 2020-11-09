// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyCt4jTEOu17ddLU2KK_jJ9O7MeimnTpXJQ",
  authDomain: "grocerylist-6ef54.firebaseapp.com",
  databaseURL: "https://grocerylist-6ef54.firebaseio.com",
  projectId: "grocerylist-6ef54",
  storageBucket: "grocerylist-6ef54.appspot.com",
  messagingSenderId: "481774771372",
  appId: "1:481774771372:web:f13921b76d78d5fe091309"
};

firebase.initializeApp(firebaseConfig);



// Save the list to database

