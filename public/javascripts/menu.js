const menuState = {

	preload: function (){
		this.game.load.image('background', 'images/darkCastleBack.png');
		this.game.load.audio('backgroundSong', 'audio/backgroundSong.ogg');
	},

	create: function () {

		this.game.add.image(0,0, 'background');
		music = this.game.add.audio('backgroundSong');

		music.play('', 0, 1, true);
		music.onLoop.add(this.playMusic, this);


		const nameLabel = this.game.add.text(200, 80, 'Fumiko Zombie Castle', 
										{font: '100px Arial', fill: '#f94639'});

		const controlsLabel = this.game.add.text(80, 310,
											'Game Controls:',
											{font: '50px Arial', fill: '#f94639'});

		const keyALabel = this.game.add.text(80, 360,
											'Move Left: "A"',
											{font: '35px Arial', fill: '#f94639'});
		const keyDLabel = this.game.add.text(80, 400,
											'Move Right: "D"',
											{font: '35px Arial', fill: '#f94639'});
		const keyWLabel = this.game.add.text(80, 440,
											'Jump: "W"',
											{font: '35px Arial', fill: '#f94639'});

		const startLabel = this.game.add.text(80, this.game.world.height-80,
											'press the "S" key to start',
											{font: '35px Arial', fill: '#f94639'});

		const skey = this.game.input.keyboard.addKey(Phaser.Keyboard.S);

		skey.onDown.addOnce(this.play, this);
	},

	playMusic: function() {
    music.play('', 0, 1, true);
		},

	play: function() {
		music.stop()
		this.game.state.start('play')
	}

};
