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


$("#submit").on("click", function(event) {
    event.preventDefault();

    //creating variables from user input

    var trname = $("#trainname").val().trim();
    var trndest = $("#traindestination").val().trim();
    // var trntime = moment($("#firsttime").val().trim(), "MM/DD/YYYY").format("X");
    var trnfreq = $("#trainfrequency").val().trim();
    var trntime = 0;
    //creating an object from the variable entered by the user
    var newtrain = {
        Name: trname,
        Destination: trndest,
        Time: trntime,
        Frequency: trnfreq
    };
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