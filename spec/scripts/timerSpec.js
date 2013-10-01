describe("timer", function(){
	it("should have a start time", function(){
		expect(timer.startTime).toBeDefined();
	});
	it("should have a finish time", function(){
		expect(timer.finishTime).toBeDefined();
	});
	it("should capture a start time", function(){
		timer.startTimer();
		expect(timer.startTime).toEqual(new Date());
	});
	it("should capture a finish time", function(){
		timer.stopTimer();
		expect(timer.finishTime).toEqual(new Date());
	});
	it("should only redefine finish time if it is null", function(){
	});
	it("should return the time elapsed between start and finish", function(){
		timer.startTimer(); timer.finishTime = timer.startTime.getTime() + 60000;
		expect(timer.timeElapsedInMinutes()).toEqual(1);
	});
});