describe("tracker", function(){
	it("should know the correct phrase", function(){
		tracker.correct = "Hello World";
		expect(tracker.correct).toEqual("Hello World");
	})
});