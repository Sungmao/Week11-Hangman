// control whether or not a letter appears as a "_" or as itself on-screen.
 var word = require('./word.js')



 var LetterAppear = function() {

 	this.blanksAndSuccesses = [];
 	this.firstAppear = function(ans) {
 		for (var i=0; i<ans.length; i++) {
 			this.blanksAndSuccesses.push("_")
 		}
 	}

 }

 module.exports = LetterAppear;