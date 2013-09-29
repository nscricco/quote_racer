var game = {
	initialize: function(container){
		tracker.correct = container.querySelector('#gameData').innerText;
	},
	startGame: function(container){
		timer.startIt();
		textbox = container.querySelector('#gameInput');
		textbox.disabled = false; textbox.focus();
		highlighter.updateWord(container.querySelector('#gameData'));
	},
	updateUserInput: function(container){
		gameInputElement = container.querySelector('#gameInput');
		tracker.typed = gameInputElement.value;
		tracker.match() ? gameInputElement.className = 'correct' : gameInputElement.className = 'incorrect';
		if(tracker.complete()){ this.finishGame(container); }
	},
	finishGame: function(container){
		timer.finishIt();
		gameResults = container.querySelector('#gameResults');
		gameResults.innerText = "Congratulations, you typed at " + tracker.getWPM() + " words per minute!";
	}
}

function gameEvents(container){
	var gameStartButton = container.querySelector('#gameStartButton');
	gameStartButton.addEventListener('click', function(){
		game.startGame(container);
	});

	var gameInput = container.querySelector('#gameInput');
	gameInput.addEventListener('keydown', function(){
		game.updateUserInput(container);
		highlighter.updateWord(container.querySelector('#gameData'));
	});
}