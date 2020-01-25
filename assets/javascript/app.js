
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQHQpvP_2JavTMDsMV3vFo8c1cbVs1no8",
    authDomain: "train-scheduler-9bbf9.firebaseapp.com",
    databaseURL: "https://train-scheduler-9bbf9.firebaseio.com",
    projectId: "train-scheduler-9bbf9",
    storageBucket: "train-scheduler-9bbf9.appspot.com",
    messagingSenderId: "677304708482",
    appId: "1:677304708482:web:c88f2d0d41e853b7b8739b",
    measurementId: "G-99H7HJK4GR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


//database reference
var database = firebase.database();