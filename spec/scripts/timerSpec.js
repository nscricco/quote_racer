describe("Timer", function(){
	it("should initialize an undefined start time", function(){
		expect(timer.startTime).toBeNull();
	});
	it("should capture a start time", function(){
		timer.startIt();
		expect(timer.startTime).toEqual(new Date());
	})
});