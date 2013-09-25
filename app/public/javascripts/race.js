function race(container){
	var gameData = container.querySelector('#gameData');

	var beforeWord = "", currentWord = "", afterWord = "", typedWord = "";

	var startTime = 0;

	initializeGameArrays = function(){
		var words = gameData.innerText.split(" ");

		currentWord = words[0]
		console.log(currentWord);
		for(var i = 1; i < words.length; i++){
			afterWord+=(words[i] + " ");
		}
	};

	highlightWord = function(){
		gameData.innerHTML = (beforeWord + " " + "<span class=\"highlight\">" + " " + currentWord + " " + "</span>" + " " + afterWord);
	};

	start = function(){
		console.log('start')
		initializeGameArrays();
		highlightWord();
		startTime = new Date();
	};

	shiftGameArrays = function(){
		beforeWord != "" ? beforeWord+=" " : beforeWord="" //deal with OBO error
		beforeWord+=currentWord;

		var words = afterWord.split(" ");
		afterWord = "";
		for(var i = 1; i < words.length; i++){
			afterWord+=(words[i] + " ");
		}

		currentWord = words[0];
	};

	getGameText = function(){
		return container.querySelector('#gameArea').value;
	};

	resetGameText = function(){
		container.querySelector('#gameArea').value = "";
	};
	
	nextWord = function(){
		shiftGameArrays();
		highlightWord();
	};

	container.onkeyup = function(arg){
		typedWord = getGameText();
		if(startTime == 0 && typedWord != ""){
			start();
		}
		if(arg.keyCode == 32){
			resetGameText();
			nextWord();
			// logWords();
		}
		console.log(arg.keyCode);
	};
};