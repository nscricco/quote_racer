describe("movable", function(){
	describe("positions", function(){
		it("should define the number of positions as the number of words in the phrase", function(){
			tracker.correct = "There goes Ted Williams, the greatest hitter that ever lived.";
			expect(movable.totalPositions()).toEqual(tracker.correct.split(" ").length);
		});
	});
});