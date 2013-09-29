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
		gameInput = appendToDom('input', 'gameInput', gameContainer);
		gameStartButton = appendToDom('button', 'gameStartButton', gameContainer);

		gameData.innerText = "Wake up the damn bambino and have me face him. I'll drill him in the ass.";
		gameInput.disabled = true;
	});

	describe("on initialize", function(){
		it("should create a paragraph element with the game phrase", function(){
			expect(gameContainer.innerHTML).toContain("bambino");
		});
		it("should return the correct phrase", function(){
			expect(game.getGameData(gameContainer)).toEqual(gameData.innerText);
		});
		it("should create a text input element", function(){
			expect(gameContainer.innerHTML).toContain("input");
		});
		it("should not allow the user to enter text", function(){
			expect(gameInput.disabled).toBeTruthy();
		});
		it("should create a start button element", function(){
			expect(gameContainer.innerHTML).toContain("button");
		});
	});
	describe("on start", function(){
		var start = gameStartButton.dispatchEvent(new Event('click'));
		it("should ")
	});
});