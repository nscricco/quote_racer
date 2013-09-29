var highlighter = {
	activeWord: function(){
		correctWords = tracker.correct.split(" "); typedWords = tracker.typed.split(" ");
		for(var i = 0; i < correctWords.length; i++){
			if(correctWords[i].localeCompare(typedWords[i]) != 0){
				return correctWords[i];
			}
		}
	},
	updateWord: function(element){
		var activeWordRegExp = new RegExp(this.activeWord());
		element.innerHTML = element.innerText.replace(activeWordRegExp, "<span id=\"highlight\">" + this.activeWord() + "</span>");
	}
}