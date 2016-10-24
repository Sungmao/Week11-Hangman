var inquirer = require('inquirer');

var StartGame = require('./game.js')
var wordForGame = new StartGame();

var word = require('./word.js')
var wordCheck = new word();

var letter = require('./letter.js')
var letterDisplay = new letter();

console.log(wordForGame.chosenWord);
var randomWord = wordForGame.chosenWord;

wordCheck.lettersInChosenWord(randomWord);

var ans = wordCheck.answer;

letterDisplay.firstAppear(ans);
console.log(letterDisplay.blanksAndSuccesses);


playGame();


function playGame() {

	inquirer.prompt([
		{
		type: 'input',
		message: 'enter a letter',
		name: 'letter'
		}
	]).then(function(answer){

		letter = answer.letter.toUpperCase();


		var blanksAndSuccesses = letterDisplay.blanksAndSuccesses;

		wordCheck.compare(letter, blanksAndSuccesses);

		console.log("Current Game Status: " + wordCheck.blanksAndSuccesses);
		console.log(wordCheck.wrongGuesses);


		if (ans.toString() == wordCheck.blanksAndSuccesses.toString()) {
		console.log("You Win!!!!");
		} 
		else{ 
			console.log("guss again")
			playGame();
		}


	})

}



