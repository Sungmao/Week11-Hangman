//contain all of the methods which will check the letters guessed versus the random word selected.

var LetterCheck = function() {

	this.answer = [];
	this.blanksAndSuccesses = [];
	this.wrongGuesses = [];
	//this.numGuesses = numGuesses;
	
	this.lettersInChosenWord = function(chosenWord) {
		this.answer = chosenWord.split("")
	};
	
	this.compare = function(letter, blanksAndSuccesses) {

		
		var letterInWord = false;
		var numBlanks = this.answer.length;

		for (var i=0; i<numBlanks; i++) {
			if(this.answer[i] == letter) {
			letterInWord = true; 
 			}
		}

		if(letterInWord){
	
			for (var i=0; i<numBlanks; i++){

				if(this.answer[i] == letter) {
					blanksAndSuccesses[i] = letter;
					
				}
			}

			this.blanksAndSuccesses = blanksAndSuccesses;
			
		} else {
		this.blanksAndSuccesses = blanksAndSuccesses;
		this.wrongGuesses.push(letter);
	//	this.numGuesses--;
		}
	}



}	

module.exports = LetterCheck;