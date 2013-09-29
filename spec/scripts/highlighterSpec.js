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
	
});