describe("timer", function(){
	it("should have a start time", function(){
		expect(timer.startTime).toBeDefined();
	});
	it("should have a finish time", function(){
		expect(timer.finishTime).toBeDefined();
	});
});