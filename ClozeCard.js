//**********************************************************************
// Create a new file named ClozeCard.js:
// ---------------------------------------

// This file should define a Node module that exports a constructor for creating cloze-deletion flashcards, e.g.:
// module.exports = ClozeCard;

// The constructor should accept two arguments: text and cloze.
// The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
// The constructed object should have a partial property that contains only the partial text.
// The constructed object should have a fullText property that contains only the full text.
// The constructor should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.
//*************************************************************************

module.exports = ClozeCard;

function ClozeCard(text, cloze) {
	if (this instanceof ClozeCard){
		this.fullText = text;
		this.cloze = cloze;
	} else {
		return new ClozeCard(text, cloze);
	}
}


// 
ClozeCard.prototype.partial = function() {
	//where cloze is found in text, replaces cloze with ...
	var replaceCloze = " .... ";
	
	this.fullText.replace(this.cloze, replaceCloze);
};



///****** Testing ******************
var card1 = ClozeCard("This is the full text.", "text");
console.log("fullText: " + card1.fullText);
// console.log("Cloze: " + card1.cloze);
console.log(card1.partial());


