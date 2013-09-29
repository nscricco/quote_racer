var timer = {
	startTime: null,
	finishTime: null,
	startIt: function(){
		this.startTime = new Date();
	},
	finishIt: function(){
		this.finishTime = new Date();
	},
	timeElapsedInMinutes: function(){
		return (this.finishTime - this.startTime)/60000
	}
};