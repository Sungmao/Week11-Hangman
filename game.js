
var wordsList = ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS", "NEPTUNE", "PLUTO"];

var StartGame = function() {	
	this.chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];
}

module.exports = StartGame;