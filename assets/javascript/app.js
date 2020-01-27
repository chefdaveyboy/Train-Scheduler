
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQHQpvP_2JavTMDsMV3vFo8c1cbVs1no8",
    authDomain: "train-scheduler-9bbf9.firebaseapp.com",
    databaseURL: "https://train-scheduler-9bbf9.firebaseio.com",
    projectId: "train-scheduler-9bbf9",
    storageBucket: "train-scheduler-9bbf9.appspot.com",
    messagingSenderId: "677304708482",
    appId: "1:677304708482:web:c88f2d0d41e853b7b8739b",
    
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  


//database reference
var database = firebase.database();

$("#add-train-btn").on("click", function(event) {
  event.preventDefault();

  var trainName = $("#train-name-input").val().trim();

  var trainDestination = $("#destination-input").val().trim();

  var trainStart = $("#train-start-input").val().trim();

  var trainFreq = $("#frequency-input").val().trim();

  

  var newTrain = {
    train: trainName,
    destination: trainDestination,
    trainStart: trainStart,
    frequency: trainFreq

  };

  database.ref().push(newTrain);

  //clear the text boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#train-start-input").val("");
  $("#frequency-input").val("");


});


database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());
  //variables for the stored data
  var trainName = childSnapshot.val().train;

  var trainDestination = childSnapshot.val().destination;

  var trainStart = childSnapshot.val().trainStart;

  var trainFreq = childSnapshot.val().frequency;
  //LOTs of fun math!
  //
  // var trainStartConvert = moment(trainStart, "HH:mm");
  // console.log(trainStartConvert);
  //
  var timeDiff = moment().diff(moment(moment(trainStart, "HH:mm")), "minutes");

  var remainder = timeDiff % trainFreq;
  
  var timeTill = trainFreq - remainder;

  var arrivalTime = moment().add(timeTill, "minutes");
 
  var arrivalConvert = moment(arrivalTime).format("hh:mm A");

  if (timeTill === 1) {
    timeTill = "This Train is About to Arrived";
  }
  
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainFreq),
    $("<td>").text(arrivalConvert),
    $("<td>").text(timeTill)
  );

  $("#train-table > tbody").append(newRow);
  
});
  

  
  
