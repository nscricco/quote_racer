describe("timer", function(){
	it("should initialize an undefined start time", function(){
		expect(timer.startTime).toBeNull();
	});
	it("should capture a start time", function(){
		timer.startIt();
		expect(timer.startTime).toEqual(new Date());
	});
	it("should initialize an undefined finish time", function(){
		expect(timer.finishTime).toBeNull();
	});
	it("should capture a finish time", function(){
		timer.finishIt();
		expect(timer.finishTime).toEqual(new Date());
	});
	it("should return total time elapsed between start and finish in minutes", function(){
		timer.startIt(); timer.finishTime = timer.startTime.getTime() + 60000;
		expect(timer.timeElapsedInMinutes()).toEqual(1);
	});
});