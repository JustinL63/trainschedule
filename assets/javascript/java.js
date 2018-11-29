var config = {
    apiKey: "AIzaSyD8_aoBaA4Jyrvo8iGitLiUjvghLlqnNqY",
    authDomain: "train-schedule-1dcfd.firebaseapp.com",
    databaseURL: "https://train-schedule-1dcfd.firebaseio.com",
    projectId: "train-schedule-1dcfd",
    storageBucket: "train-schedule-1dcfd.appspot.com",
    messagingSenderId: "884233253405"
  };

firebase.initializeApp(config);

var database = firebase.database();


//creating a variable for the current time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));
//pushing back the current time one year so that anytime entered will not show and error
var currentTimeConvert = moment().subtract(1, "years");
console.log(currentTimeConvert);
var diffTime = moment().diff(moment(currentTimeConvert), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);



$("#submit").on("click", function(event) {
    event.preventDefault();

    //creating variables from user input

    var trname = $("#trainname").val().trim();
    var trndest = $("#traindestination").val().trim();
    var trntime = $("#firsttime").val().trim();
    var trnfreq = $("#trainfrequency").val().trim();
    var trntime = 0;
    //creating an object from the variable entered by the user
    var newtrain = {
        Name: trname,
        Destination: trndest,
        Time: trntime,
        Frequency: trnfreq
    };
//need a variable that defines the difference between the current time and the time entered for the first train
    var trainTimeDiff = moment().diff(currentTimeConvert, "minutes");
    console.log(trainTimeDiff);
//need a variable that shows the next train based on first time and frequency
    var nextTrain = (currentTimeConvert + trnfreq);
    console.log(nextTrain);

    //I need to use moment to determine how long until the next train arrives
    

    

    //pushing the new train to the firebase data base
    database.ref().push(newtrain);

    console.log(newtrain.Name);
    console.log(newtrain.Destination);
    console.log(newtrain.Time);
    console.log(newtrain.Frequency);
// creating a new row for the train added to the schedule
    var newRow = $("<tr>").append(
        $("<td>").text(trname),
        $("<td>").text(trndest),
        $("<td>").text(trntime),
        $("<td>").text(trnfreq),
      );
      $("#traintable > tbody").append(newRow);
});