$(document).ready(function() {
	var config = {
    apiKey: "AIzaSyBs0ArYWgConQ9PlNNgk3QB6G7tvt_y1ak",
    authDomain: "traintime-c3243.firebaseapp.com",
    databaseURL: "https://traintime-c3243.firebaseio.com",
    projectId: "traintime-c3243",
    storageBucket: "",
    messagingSenderId: "751120452456"
  };

firebase.initializeApp(config);

var database = firebase.database();

 function getMinutesAway(firstTrain, nextTrain){
 	var minutesAway;
 	var timeOfFirstTrain = $("#first-train-input").val().trim();
 	var timeBetweenTrains = $("#frequency-input").val().trim()
	var firstTrain = moment(timeOfFirstTrain, "HH:mm:ss a");
	var nextTrain = moment(firstTrain + timeBetweenTrains , "HH:mm:ss a");
console.log()
}


database.ref("/traintime").on("value", function(snap) {
	$("#display-article").empty();


	snap.forEach(function(childsnap){

		var timeString = $("#first-train-input").val().trim();
		var timeFreq = $("#frequency-input").val().trim();
		var firstTime = moment(timeString);
		var newTime = moment(firstTime).add(timeFreq,'minutes');
		console.log("new time: " + newTime);



		var childValue = childsnap.val();

		var tr = $("<tr>");
		tr.append("<td>" + childValue.trainName + "</td>");
		tr.append("<td>" + childValue.trainDestination + "</td>");
		//tr.append("<td>" + childValue.firstTrainTime + "</td>");
		tr.append("<td>" + childValue.trainFrequency + "</td>");


		$("#display-article").append(tr);


	})
})


$("#add-train-btn").on("click", function(event) {
	event.preventDefault();

	var name = $("#train-name-input").val().trim();
	var destination = $("#destination-input").val().trim()
	var firstTrain = $("#first-train-input").val().trim();
	var frequency = $("#frequency-input").val().trim();

	database.ref("/traintime").push({
		trainName: name,
		trainDestination: destination,
		firstTrainTime: firstTrain,
		trainFrequency: frequency
	});

});	

});




