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

		game.initialize(gameContainer);
		gameEvents(gameContainer);
	});

	describe("on initialize", function(){
		it("should create a paragraph element with the game phrase", function(){
			expect(gameContainer.innerHTML).toContain("bambino");
		});
		it("should store the game phrase in the accuracy tracker", function(){
			expect(tracker.correct).toEqual(gameData.innerText);
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
	describe("on start button click", function(){
		beforeEach(function(){
			gameStartButton.dispatchEvent(new Event('click'));
		});

		it("should start the timer", function(){
			expect(timer.startTime).not.toBeNull();
		});
		it("should allow the user to enter text", function(){
			expect(gameInput.disabled).toBeFalsy();
		});
		it("should bring the input textbox into focus", function(){
			expect(gameInput.focus()).toBeFalsy();
		});
	});
	describe("during gameplay", function(){
		it("should call update user input keydown", function(){
			spyOn(game, 'updateUserInput');
			gameInput.dispatchEvent(new Event('keydown'));
			expect(game.updateUserInput).toHaveBeenCalled();
		});
		it("should update the accuracy tracker on keydown", function(){
			gameInput.value = "Wake up";
			game.updateUserInput(gameContainer);
			expect(tracker.match()).toBeTruthy();
		});
		it("should change the class of the input element if the user is off track", function(){
			expect(gameInput.className).toEqual('incorrect')
		});
	});
});