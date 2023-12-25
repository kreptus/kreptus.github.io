const push = 180;

function modeswitch() {
	let image = document.getElementById("background");
	if(image.src.match("./img/darkmode.jpg")) { 
		image.src = "./img/lightmode.webp";
	} else {
		image.src = "./img/darkmode.jpg";
	} 
}

function openNav() {
	if (document.getElementById("contents").style.width == push + "px") {
		closeNav();
	} else {
	document.getElementById("contents").style.width = push + "px";
	document.getElementById("main").style.marginLeft = push + "px";
	}
}

function closeNav() {
	document.getElementById("contents").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";

}

function functionName(s) {
	alert("Hello, " + s + "!");
}
