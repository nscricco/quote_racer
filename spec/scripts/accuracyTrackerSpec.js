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
});