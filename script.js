// https://docs.google.com/spreadsheets/d/1V3XIX7eNnjQUMfmN6G-6uy5AP3cAFF6l9plLvH1WAT0/gviz/tq?tqx=out:json&tq

function updateCount(event) {
	console.log(event.currentTarget.maxLength, event.currentTarget.value.length);
	document.querySelector("#count span").innerText = event.currentTarget.maxLength - event.currentTarget.value.length;
}

const title = document.querySelector("#title");
title.addEventListener("focus", updateCount);
title.addEventListener("keyup", updateCount);

const desc = document.querySelector("#description");
desc.addEventListener("focus", updateCount);
desc.addEventListener("keyup", updateCount);

// TODO: get the actual data
const request = new XMLHttpRequest();
request.onreadystatechange = function() {
	console.log(request.readyState, request.status, request.statusText, request.responseText);
};
request.open('GET', 'https://docs.google.com/spreadsheets/d/1V3XIX7eNnjQUMfmN6G-6uy5AP3cAFF6l9plLvH1WAT0/gviz/tq?tqx=out:json&tq', true);
request.send();

const data = [
	// { title: "I like to move it move it", description: "And now it is time for America to reach far greater heights by sending astronauts to Mars! Ultimately, anyone who wants to be a space traveler and help build a new civilization on Mars should be able to do so. That is an inspiring future!" }, 
	// { title: "Hello world!", description: "ELON: WOKENESS GIVES MEAN PEOPLE A SHIELD TO BE MEAN AND CRUEL" }, 
	// { title: "Helo iwhfiuh hn ortms u iu yuy uyyn iuy yy y", description: "idrc" }, 
	// { title: "ew", description: "3333333333333333333333333333333333333333" },
	// { title: "I like to move it move it", description: "And now it is time for America to reach far greater heights by sending astronauts to Mars! Ultimately, anyone who wants to be a space traveler and help build a new civilization on Mars should be able to do so. That is an inspiring future!" }, 
	// { title: "Hello world!", description: "ELON: WOKENESS GIVES MEAN PEOPLE A SHIELD TO BE MEAN AND CRUEL" }, 
	// { title: "Helo iwhfiuh hn ortms u iu yuy uyyn iuy yy y", description: "idrc" }, 
	// { title: "ew", description: "3333333333333333333333333333333333333333" },
]; 


// create .box elements
for(let boxData of data) {
	let box = document.createElement("div");
	box.classList.add("box");
	let title = document.createElement("h2");
	title.innerText = boxData.title;
	let description = document.createElement("p");
	description.innerText = boxData.description;
	box.append(title);
	box.append(description);
	document.querySelector("main").append(box);
}



// TODO

// const express = require("express");
// const {google} = require("googleapis");

// const app = express();

// app.get("/", (req, res) => {
// 	res.send("Hello world!");
// });

// app.listen(1337, (req, res) => console.log("Running on 1337"))