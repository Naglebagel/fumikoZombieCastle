const winState = {

	preload: function (){
		this.game.load.image('background', 'images/winBackground.png');
		this.game.load.audio('winnerSong', 'audio/winner.ogg');
	},

	create: function() {

		this.game.add.image(0,0, 'background');

		winMusic = this.game.add.audio('winnerSong');

				winMusic.play('', 0, 0.6, true);
				winMusic.onLoop.add(this.playWinMusic, this);

		const winLabel = this.game.add.text(150, 200, 'YOU WON!', 
										{font: '200px Arial', fill: '#ffd53d'});

		const startLabel = this.game.add.text(80, this.game.world.height-80, 
											'press the "S" key to restart',
											{font: '25px Arial', fill: '#ffd53d'});

		const skey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

		skey.onDown.addOnce(this.restart, this);
	},

	playWinMusic: function() {
    winMusic.play('', 0, 0.6, true);
		},

	restart: function () {
		winMusic.stop();
		this.game.state.start('menu');
	}
};