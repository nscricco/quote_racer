var game = {
	getGameData: function(container){
		return container.querySelector('#gameData').innerText;
	},
	startButtonHandler: function(container){
		timer.startIt();
		container.querySelector('#gameInput').focus();
	}
}

function gameEvents(container){
	gameStartButton = container.querySelector('#gameStartButton')
	gameStartButton.addEventListener('click', function(){
		game.startButtonHandler(container);
	});
}