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

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
};