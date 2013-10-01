var timer = {
	startTime: null,
	finishTime: null,
	startTimer: function(){
		this.startTime = new Date();
	},
	stopTimer: function(){
		if(this.finishTime == null){
			this.finishTime = new Date();
		}
	},
	timeElapsedInMinutes: function(){
		return (this.finishTime - this.startTime)/60000;
	}
}