var inquirer = require('inquirer');

var StartGame = require('./game.js')
var wordForGame = new StartGame();

var word = require('./word.js')
var wordCheck = new word();

var letter = require('./letter.js')
var letterDisplay = new letter();

var randomWord = wordForGame.chosenWord;

wordCheck.lettersInChosenWord(randomWord);

var ans = wordCheck.answer;

letterDisplay.firstAppear(ans);
console.log("Planets in The Solar System")
console.log(letterDisplay.blanksAndSuccesses);

var numGuesses = 15;

playGame(numGuesses);


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
		console.log("Wrong letters: " + wordCheck.wrongGuesses);


		if (ans.toString() == wordCheck.blanksAndSuccesses.toString()) {
		console.log("You Win!!!!");
		console.log("The answer is " + randomWord + ".")
		console.log("---------------------------------")
		} 
		else if(numGuesses > 1){ 
			console.log("Planets in The Solar System")
			console.log("Guss again. You still can try " + numGuesses + " times")
			numGuesses--;
			console.log("---------------------------------")
			
			playGame();
		} else{
			console.log("Sorry!!!! You lose!!!!")
			console.log("The answer is " + randomWord + ".")
			console.log("---------------------------------")
		}



	})

}



