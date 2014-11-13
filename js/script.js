var v = new (function(){
	var self = this;

	this.video = document.getElementById('video');

	this.cpane = {
		self : document.getElementById('controlPane'),
		play : document.getElementById('play'),
		pause : document.getElementById('pause'),
		stop : document.getElementById('stop')
	};

	this.cpane.play.onclick = function(){
		self.video.play();
	}
	this.cpane.pause.onclick = function(){
		self.video.pause();
	}
	this.cpane.stop.onclick = function(){
		self.video.currentTime = 1;
		self.video.pause();
	}
})();