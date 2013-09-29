var movable = {
	totalPositions: function(){
		return tracker.correct.split(" ").length;
	},
	currentPosition: function(){
		correctWords = tracker.correct.split(" "); typedWords = tracker.typed.split(" ");
		for(var i = 0; i < correctWords.length; i++){
			if(correctWords[i].localeCompare(typedWords[i]) != 0){
				return i;
			}
		}
	},
	updateProgress: function(element){
		element.style.left = Math.round(this.currentPosition()/this.totalPositions()*100) + "%";
	}
}