function modeswitch() {
	let image = document.getElementById("background");
	if(image.src.match("./img/darkmode.jpg")) { 
		image.src = "./img/lightmode.webp";
	} else {
		image.src = "./img/darkmode.jpg";
	} 
}

function openNav() {
	document.getElementById("contents").style.width = "250px";
}

function closeNav() {
	document.getElementById("contents").style.width = "0";
}

function functionName(s) {
	alert("Hello, " + s + "!");
}
