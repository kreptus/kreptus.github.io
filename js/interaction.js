function modeswitch() {
	let image = document.getElementById("background");
	if(image.src.match("./img/darkmode.jpg")) { 
		image.src = "./img/lightmode.webp";
	} else {
		image.src = "./img/darkmode.jpg";
	} 
}

function chBackground() {
	var container = document.getElementById("background-container");
	if (container.style.backgroundImage.match("./img/lightmode.webp")) {
		container.style.backgroundImage = "url('./img/darkmode.jpg')";
	} else {
		container.style.backgroundImage = "url('./img/lightmode.webp')";
	}
}

function functionName(s) {
	alert("Hello, " + s + "!");
}
