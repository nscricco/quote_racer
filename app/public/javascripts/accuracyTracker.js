var tracker = {
	correct: "",
	typed: "",
	match: function(){
		return this.correct.match(new RegExp(this.typed));
	}
}