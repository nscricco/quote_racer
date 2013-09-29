describe("tracker", function(){
	it("should know the correct phrase", function(){
		expect(tracker.correct).toBeDefined();
	})
	it("should know the typed phrase", function(){
		expect(tracker.typed).toBeDefined();
	})
});