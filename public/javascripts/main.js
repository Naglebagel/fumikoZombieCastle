



PlayState = {};

PlayState.preload = function(){
		this.game.load.tilemap('castleLevel01', 'data/castleLevel01.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tiles', 'images/tile_castle.png');
		this.game.load.spritesheet('fumi', 'images/fumikoSprite.png', 24, 32);
	};// end of preload

	PlayState.create = function(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.map = this.game.add.tilemap('castleLevel01');
		this.map.addTilesetImage('tiles', 'tiles');

		this.backgroundlayer = this.map.createLayer('BackgroundLayer');
		this.collisionLayer = this.map.createLayer('CollisionLayer');
		this.blockedLayer = this.map.createLayer('BlockedLayer');

		this.map.setCollisionBetween(1, 10000, true, 'CollisionLayer');

		this.player = this.game.add.sprite(63.20, 673.03, 'fumi');
		this.player.anchor.set(0, 1);

		//enable physics for player
		this.game.physics.arcade.enable(this.player);

		
		this.player.body.gravity.y = 1200;


		//player movement
		this.player.moveRight = false;
		this.player.moveLeft = false;
		this.player.jump = false;
		// this.player.idleFrame = 10;

		//player animations
		const moveLeftAnimation = this.player.animations.add('left', [12, 3, 8, 13, 4, 9], 6, true);
		const moveRightAnimation = this.player.animations.add('right', [1, 11, 5, 6, 2, 7], 6, true);
		const jumpAnimation = this.player.animations.add('jump', [0], 1, true);
		// const idleAnimation = this.player.animations.add('idle', [10], 1, true);
		this.game.camera.follow(this.player);

		//make player body collide with map bounds
		this.player.body.collideWorldBounds = true;

		// key press listeners
		this.rightKeyPressed = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
		this.leftKeyPressed = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
		this.jumpKeyPressed = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
		
		this.rightKeyPressed.onDown.add(function(){
			this.player.moveRight = true;
			this.player.body.velocity.x = 200;
		}, this);

		this.rightKeyPressed.onUp.add(function(){
			this.player.moveRight = false;
			this.player.body.velocity.x = 0;
		}, this);

		this.leftKeyPressed.onDown.add(function(){
			this.player.moveLeft = true;
			this.player.body.velocity.x = -200;
		}, this);

		this.leftKeyPressed.onUp.add(function(){
			this.player.moveLeft = false;
			this.player.body.velocity.x = 0;
		}, this);

		this.jumpKeyPressed.onDown.add(function(){
			this.player.jump = true;
			this.player.body.velocity.y = -500;
		}, this);

		this.jumpKeyPressed.onUp.add(function(){
			this.player.jump = false;
			this.player.body.velocity.y = 0;
		}, this);

	
	}; // end of create
	
	PlayState.update = function(){

		this.game.physics.arcade.collide(this.player, this.collisionLayer);

		if(this.player.moveRight && !this.player.moveLeft){
			this.player.animations.play('right');
			
		}
		else if(!this.player.moveRight && this.player.moveLeft){
				this.player.animations.play('left');
		}
		else{
			this.player.animations.stop();
		}

		if (this.player.jump){
			this.player.animations.play('jump');
		}

	

	};// end of update



window.onload = function () {
    let game = new Phaser.Game(1344, 736, Phaser.AUTO, 'game');
    game.state.add('play', PlayState);
    game.state.start('play');
};





