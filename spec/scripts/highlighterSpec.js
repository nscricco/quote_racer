describe("highlighter", function(){
	beforeEach(function(){
		tracker.correct = "Anything is possible!!!";
	});

	it("should start on the first word", function(){
		expect(highlighter.activeWord()).toBe('Anything');
	});
	it("should stay on the active word", function(){
		tracker.typed = "Anything i"
		expect(highlighter.activeWord()).toBe('is');
	});
	it("should move to the next word once active word is completed", function(){
		tracker.typed = "Anything is"
		expect(highlighter.activeWord()).toBe('possible!!!');
	});
	it("should move span in HTML to wrap active word", function(){
		var element = document.createElement('p'); element.innerText = tracker.correct;
		tracker.typed = "Anything i";
		highlighter.updateWord(element);
		expect(element.innerHTML).toBe('Anything <span id=\"highlight\">is</span> possible!!!')
	});
	it("should actively look for ?'s and handle them accordingly (due to it being a regex keyletter)", function(){
		var element = document.createElement('p'); tracker.correct = element.innerText = "Say what?";
		tracker.typed = "Say wh";
		highlighter.updateWord(element);
		expect(element.innerHTML).toBe('Say <span id=\"highlight\">what?</span>');
	});
});