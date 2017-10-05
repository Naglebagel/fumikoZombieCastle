const winState = {

	preload: function (){
		this.game.load.image('background', 'images/darkCastleBack.png');
		this.game.load.audio('winnerSong', 'audio/winner.ogg');
	},

	create: function() {
		
		this.game.add.image(0,0, 'background');

		winMusic = this.game.add.audio('winnerSong');

				winMusic.play();

		const winLabel = this.game.add.text(80, 80, 'YOU WON!', 
										{font: '50px Arial', fill: '#f94639'});

		const startLabel = this.game.add.text(80, this.game.world.height-80, 
											'press the "S" key to restart',
											{font: '25px Arial', fill: '#f94639'});

		const skey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

		skey.onDown.addOnce(this.restart, this);
	},

	restart: function () {
		winMusic.stop();
		this.game.state.start('menu');
	}
};