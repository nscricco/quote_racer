var highlighter = {
	activeWord: function(){
		correctWords = tracker.correct.split(" "); typedWords = tracker.typed.split(" ");
		for(var i = 0; i < correctWords.length; i++){
			if(correctWords[i].localeCompare(typedWords[i]) != 0){
				return correctWords[i];
			}
		}
	}
}