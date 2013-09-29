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
		console.log('update that shiz');
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
	})
}