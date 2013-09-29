var game = {
	initialize: function(container){
		tracker.correct = container.querySelector('#gameData').innerText;
	},
	startIt: function(container){
		timer.startIt();
		textbox = container.querySelector('#gameInput');
		textbox.disabled = false; textbox.focus();
	},
	updateUserInput: function(container){
		gameInputElement = container.querySelector('#gameInput');
		tracker.typed = gameInputElement.value;
		tracker.match() ? gameInputElement.className = 'correct' : gameInputElement.className = 'incorrect';
		
		if(tracker.complete()){
			this.finishIt();
		}
	},
	finishIt: function(container){
	}
}

function gameEvents(container){
	var gameStartButton = container.querySelector('#gameStartButton');
	gameStartButton.addEventListener('click', function(){
		game.startIt(container);
	});

	var gameInput = container.querySelector('#gameInput');
	gameInput.addEventListener('keydown', function(){
		game.updateUserInput(container);
	});
}