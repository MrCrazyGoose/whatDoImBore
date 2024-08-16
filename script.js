// https://docs.google.com/spreadsheets/d/1V3XIX7eNnjQUMfmN6G-6uy5AP3cAFF6l9plLvH1WAT0/gviz/tq?tqx=out:json&tq

function parseSheet(gvisResponseText) {
	// Not the best way to do this, but it'a working fo now
	let a = gvisResponseText.indexOf("{");
	let b = gvisResponseText.lastIndexOf("}");
	return JSON.parse(gvisResponseText.substring(a, b + 1));
}

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
	if (request.readyState !== 4)
		return;

	const data = parseSheet(request.responseText);
	console.log(request.readyState, request.status, data);
	console.log(data.table.rows);
	console.log(data.table.rows[0].c[1].v, data.table.rows[0].c[2].v);

	// create .box elements
	for(let i = data.table.rows.length - 1; i >= 0; i--) {
		let row = data.table.rows[i];
		let box = document.createElement("div");
		box.classList.add("box");
		let title = document.createElement("h2");
		title.innerText = row.c[1].v;
		let description = document.createElement("p");
		description.innerText = row.c[2].v;
		box.append(title);
		box.append(description);
		document.querySelector("main").append(box);
	}
};
request.open('GET', 'https://docs.google.com/spreadsheets/d/1V3XIX7eNnjQUMfmN6G-6uy5AP3cAFF6l9plLvH1WAT0/gviz/tq?tqx=out:json&tq', true);
request.send();

// const data = [
// 	{ title: "I like to move it move it", description: "And now it is time for America to reach far greater heights by sending astronauts to Mars! Ultimately, anyone who wants to be a space traveler and help build a new civilization on Mars should be able to do so. That is an inspiring future!" }, 
// 	{ title: "Hello world!", description: "ELON: WOKENESS GIVES MEAN PEOPLE A SHIELD TO BE MEAN AND CRUEL" }, 
// 	{ title: "Helo iwhfiuh hn ortms u iu yuy uyyn iuy yy y", description: "idrc" }, 
// 	{ title: "ew", description: "3333333333333333333333333333333333333333" },
// 	{ title: "I like to move it move it", description: "And now it is time for America to reach far greater heights by sending astronauts to Mars! Ultimately, anyone who wants to be a space traveler and help build a new civilization on Mars should be able to do so. That is an inspiring future!" }, 
// 	{ title: "Hello world!", description: "ELON: WOKENESS GIVES MEAN PEOPLE A SHIELD TO BE MEAN AND CRUEL" }, 
// 	{ title: "Helo iwhfiuh hn ortms u iu yuy uyyn iuy yy y", description: "idrc" }, 
// 	{ title: "ew", description: "3333333333333333333333333333333333333333" },
// ];
