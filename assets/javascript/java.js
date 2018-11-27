// firebase.initializeApp(config);

// var database = firebase.database();


$("#submit").on("click", function(event) {
    event.preventDefault();

    var trname = $("#trainname").val().trim();
    var trndest = $("#traindestination").val().trim();
    var trntime = moment($("#firsttime").val().trim(), "MM/DD/YYYY").format("X");
    var trnfreq = $("#trainfrequency").val().trim();

    var newtrain = {
        Name: trname,
        Destination: trndest,
        Time: trntime,
        Frequency: trnfreq
    };
    database.ref().push(newtrain);

    console.log(newtrain.Name);
    console.log(newtrain.Destination);
    console.log(newtrain.Time);
    console.log(newtrain.Frequency);

    var newRow = $("<tr>").append(
        $("<td>").text(trname),
        $("<td>").text(trndest),
        $("<td>").text(trntime),
        $("<td>").text(trnfreq),
      );
      $("#traintable > tbody").append(newRow);
});