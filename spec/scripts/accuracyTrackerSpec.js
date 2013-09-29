describe("tracker", function(){
	it("should know the correct phrase", function(){
		expect(tracker.correct).toBeDefined();
	});
	it("should know the typed phrase", function(){
		expect(tracker.typed).toBeDefined();
	});
	it("should know if the typed phrase is off track", function(){
		tracker.correct = "Nomar"; tracker.typed = "Nomr";
		expect(tracker.match()).toBeFalsy();
	});
	it("should know if the typed phrase is on track", function(){
		tracker.correct = "Pedro"; tracker.typed = "Ped";
		expect(tracker.match()).toBeTruthy();
	});
	it("should know if the race is incomplete", function(){
		tracker.correct = "Dustin"; tracker.typed = "Du";
		expect(tracker.complete()).toBeFalsy();
	});
	it("should know if the race is complete", function(){
		tracker.correct = "Varitek"; tracker.typed = "Varitek";
		expect(tracker.complete()).toBeTruthy();
	});
	it("should calculate words per minute", function(){
		tracker.correct = tracker.typed = "Nomah hit the ball wicked fah";
		console.log(tracker.correct)
		timer.startTime = 0; timer.finishTime = 60000;
		expect(tracker.getWPM()).toEqual(6);
	})
});