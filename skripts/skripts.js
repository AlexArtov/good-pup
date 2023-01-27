var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pup.png') {
      myImage.setAttribute ('src','images/amega-pup.webp');
    } else {
      myImage.setAttribute ('src','images/pup.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = myName + ', is good pupy!';
  }

  if(!localStorage.getItem('name')) {
	setUserName();
  } else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  
  myButton.onclick = function() {
	setUserName();
  }