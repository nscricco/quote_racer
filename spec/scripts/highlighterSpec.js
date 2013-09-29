describe("highlighter", function(){
	beforeEach(function(){
		tracker.correct = "Anything is possible!!!";
	});

	it("should start on the first word", function(){
		expect(highlighter.activeWord()).toBe('Anything');
	});
});