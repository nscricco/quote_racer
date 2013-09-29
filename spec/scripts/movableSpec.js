describe("movable", function(){
	beforeEach(function(){
		tracker.correct = "There goes Ted Williams, the greatest hitter that ever lived.";
		tracker.typed = "There goes Ted Wi"
	});

	it("should define the number of positions as the number of words in the phrase", function(){
		expect(movable.totalPositions()).toEqual(tracker.correct.split(" ").length);
	});
	it("should know the current position", function(){
		expect(movable.currentPosition()).toEqual(3);
	});
	it("should update the image element style based on user progress", function(){
		var element = document.createElement('img');
		movable.updateProgress(element);
		expect(element.style.left).toBe('30%')
	})
});