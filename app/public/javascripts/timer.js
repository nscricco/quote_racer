var timer = {
	startTime: null,
	finishTime: null,
	startTimer: function(){
		this.startTime = new Date();
	},
	stopTimer: function(){
		this.finishTime = new Date();
	}
}