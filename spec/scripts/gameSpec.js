describe("game", function(){
	function appendToDom(element, id, parent){
		parent = parent || document.body;
		var element = document.createElement(element);
		element.id = id;
		parent.appendChild(element);

		return element;
	}

	beforeEach(function(){
		gameContainer = appendToDom('div', 'gameContainer');
		gameData = appendToDom('p', 'gameData', gameContainer);

		gameData.innerText = "Wake up the damn bambino and have me face him. I'll drill him in the ass."
	});

	describe("on initialize", function(){
		it("should return the correct phrase", function(){
			expect(game.getGameData(gameContainer)).toEqual(gameData.innerText);
		});
		
	});
});