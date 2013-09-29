var tracker = {
	correct: "",
	typed: "",
	match: function(){
		return this.correct.match(new RegExp(this.typed));
	},
	complete: function(){
		return this.correct.localeCompare(this.typed) == 0;
	}
}