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
		// game input class will change from correct to incorrect based on match with gameData
		gameStartButton = appendToDom('button', 'gameStartButton', gameContainer);
		gameResults = appendToDom('p', 'gameResults', gameContainer);


		gameData.innerText = "Wake up the damn bambino and have me face him. I'll drill him in the ass.";
		gameInput.disabled = true;

		game.initialize(gameContainer);
		gameEvents(gameContainer);
	});

	afterEach(function(){
		document.body.removeChild(gameContainer);
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
		it("should highlight the first word", function(){
			expect(gameData.innerHTML).toContain("Wake</span>");
		});
	});
	describe("during gameplay", function(){
		beforeEach(function(){
			gameStartButton.dispatchEvent(new Event('click'));
		});

		it("should call update user input keydown", function(){
			spyOn(game, 'updateUserInput');
			gameInput.dispatchEvent(new Event('keydown'));
			expect(game.updateUserInput).toHaveBeenCalled();
		});
		it("should update the accuracy tracker on keydown", function(){
			gameInput.value = "Wake up";
			gameInput.dispatchEvent(new Event('keydown'));
			expect(tracker.typed).toEqual("Wake up");
		});
		it("should update the class of the input element to incorrect if the user is off track", function(){
			gameInput.value = "Wake up the damn Jeter"
			gameInput.dispatchEvent(new Event('keydown'));
			expect(gameInput.className).toEqual('incorrect');
		});
		it("should update the class of the input to correct if the user is on track", function(){
			gameInput.value = "Wake up the damn bambino";
			gameInput.dispatchEvent(new Event('keydown'));
			expect(gameInput.className).toEqual('correct');
		});
		it("should highlight the active word", function(){
			gameInput.value = "Wake up t";
			gameInput.dispatchEvent(new Event('keydown'));
			expect(gameData.innerHTML).toContain('the</span>')
		});
		it("should call finish if user has typed the entire game phrase", function(){
			gameInput.value = gameData.innerText;
			spyOn(game, 'finishGame');
			gameInput.dispatchEvent(new Event('keydown'));
			expect(game.finishGame).toHaveBeenCalled();
		});
	});
	describe("on completion", function(){
		beforeEach(function(){
			game.finishGame(gameContainer);
		});

		it("should stop the timer", function(){
			expect(timer.finishTime).not.toBeNull();
		});
		it("should display the game results in a paragraph element", function(){
			expect(gameContainer.innerHTML).toContain("words per minute");
		});
		it("should no rot highlight any word", function(){
			expect(gameData.innerHTML).not.toContain('span')
		})
	});
});