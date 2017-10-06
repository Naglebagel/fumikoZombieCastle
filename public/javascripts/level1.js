PlayState = {};

PlayState.preload = function(){
		this.game.load.tilemap('castleLevel01', 'data/castleLevel01.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tiles', 'images/tile_castle.png');
		this.game.load.spritesheet('fumi', 'images/fumikoSprite.png', 24, 32);
		this.game.load.spritesheet('zombie', 'images/zombieSprite.png',32 ,48);
		// this.game.load.spritesheet('bat', 'images/batSprite.gif', 32, 32);
		this.game.load.image('door', 'images/door.png');
		this.game.load.audio('sfx:kill', 'audio/killSound.ogg');
		this.game.load.audio('backgroundSong', 'audio/backgroundSong.ogg');
	};// end of preload

	PlayState.create = function(){
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//create map and add tile set's + layers
		this.map = this.game.add.tilemap('castleLevel01');
		this.map.addTilesetImage('tiles', 'tiles');

		this.backgroundlayer = this.map.createLayer('BackgroundLayer');
		this.pathLayer = this.map.createLayer('PathLayer');
		this.collisionLayer = this.map.createLayer('CollisionLayer');
		this.blockedLayer = this.map.createLayer('BlockedLayer');

		// enable collisions on specific layers
		this.map.setCollisionBetween(1, 10000, true, 'CollisionLayer');
		this.map.setCollisionBetween(1, 10000, true, 'PathLayer');

		//create player sprite
		this.player = this.game.add.sprite(63.20, 673.03, 'fumi');
		this.player.anchor.set(0, 1);

		//enable physics for player
		this.game.physics.arcade.enable(this.player);

		//set gravity 
		this.GRAVITY = 1200;

			//level music

			levelMusic = this.game.add.audio('backgroundSong');

				levelMusic.play('', 0, 1, true);
				levelMusic.onLoop.add(playLevelMusic, this);


		//player movement
		this.player.moveRight = false;
		this.player.moveLeft = false;
		this.player.jump = false;
		const jumpSpeed = 600;
		// this.player.idleFrame = 10;

		//player animations
		const moveLeftAnimation = this.player.animations.add('fumiLeft', [12, 3, 8, 13, 4, 9], 6, true);
		const moveRightAnimation = this.player.animations.add('fumiRight', [1, 11, 5, 6, 2, 7], 6, true);
		const jumpAnimation = this.player.animations.add('fumiJump', [0], 1, true);
		// const idleAnimation = this.player.animations.add('idle', [10], 1, true);
		this.game.camera.follow(this.player);

		//make player body collide with map bounds
		this.player.body.collideWorldBounds = true;

		//enable gravity
		this.game.physics.arcade.gravity.y = this.GRAVITY;

		//enemy code

		enemy1 = this.game.add.sprite(327.15, 604.04, 'zombie');
			this.game.physics.arcade.enable(enemy1);
				enemy1.anchor.set(0,-0.6);
				enemy1.frame = 3; 
				enemy1.animations.add('eRight', [2, 3, 6], 3, true);
				enemy1.animations.add('eLeft', [1, 5, 4], 3, true);
				enableBody = true;
				enemy1.body.collideWorldBounds =true;
				enemy1.body.velocity.setTo(-40, 0);
		enemy2 = this.game.add.sprite(222.66, 409.78, 'zombie');
			this.game.physics.arcade.enable(enemy2);
				enemy2.anchor.set(0,-0.6);
				enemy2.frame = 3;
				enemy2.animations.add('eRight', [2, 3, 6], 3, true);
				enemy2.animations.add('eLeft', [1, 5, 4], 3, true);
				enableBody = true;
				enemy2.body.collideWorldBounds =true;
				enemy2.body.velocity.setTo(40, 0);
		enemy3 = this.game.add.sprite(480.20, 411.25, 'zombie');
			this.game.physics.arcade.enable(enemy3);
				enemy3.anchor.set(0,-0.6);
				enemy3.frame = 3;
				enemy3.animations.add('eRight', [2, 3, 6], 3, true);
				enemy3.animations.add('eLeft', [1, 5, 4], 3, true);
				enableBody = true;
				enemy3.body.collideWorldBounds =true;
			enemy3.body.velocity.setTo(-40, 0);
		enemy4 = this.game.add.sprite(226.05, 153.87, 'zombie');
			this.game.physics.arcade.enable(enemy4);
				enemy4.anchor.set(0,-0.6);
				enemy4.frame = 3;
				enemy4.animations.add('eRight', [2, 3, 6], 3, true);
				enemy4.animations.add('eLeft', [1, 5, 4], 3, true);
				enableBody = true;
				enemy4.body.collideWorldBounds =true;
			enemy4.body.velocity.setTo(40, 0);
		enemy5 = this.game.add.sprite(481.68, 153.70, 'zombie');
			this.game.physics.arcade.enable(enemy5);
				enemy5.anchor.set(0,-0.6);
				enemy5.frame = 3;
				enemy5.animations.add('eRight', [2, 3, 6], 3, true);
				enemy5.animations.add('eLeft', [1, 5, 4], 3, true);
				enableBody = true;
				enemy5.body.collideWorldBounds =true;
				enemy5.body.velocity.setTo(-40, 0);
		enemy6 = this.game.add.sprite(705.37, 191.97, 'zombie');
			this.game.physics.arcade.enable(enemy6);
				enemy6.anchor.set(0,-0.6);
				enemy6.frame = 3;
				enemy6.animations.add('eRight', [2, 3, 6], 3, true);
				enemy6.animations.add('eLeft', [1, 5, 4], 3, true);
				enableBody = true;
				enemy6.body.collideWorldBounds =true;
				enemy6.body.velocity.setTo(40, 0);
		enemy7 = this.game.add.sprite(739.22, 347.97, 'zombie');
				this.game.physics.arcade.enable(enemy7);
				enemy7.anchor.set(0,-0.6);
				enemy7.frame = 3;
				enemy7.animations.add('eRight', [2, 3, 6], 3, true);
				enemy7.animations.add('eLeft', [1, 5, 4], 3, true);
				enableBody = true;
				enemy7.body.collideWorldBounds =true;
				enemy7.body.velocity.setTo(-40, 0);
		enemy8 = this.game.add.sprite(990.87, 190.50, 'zombie');
			this.game.physics.arcade.enable(enemy8);
				enemy8.anchor.set(0,-0.6);
				enemy8.frame = 3;
				enemy8.animations.add('eRight', [2, 3, 6], 3, true);
				enemy8.animations.add('eLeft', [1, 5, 4], 3, true);
				enableBody = true;
				enemy8.body.collideWorldBounds =true;
				enemy8.body.velocity.setTo(40, 0);
		enemy9 = this.game.add.sprite(1023.25, 409.78, 'zombie');
			this.game.physics.arcade.enable(enemy9);
				enemy9.anchor.set(0,0.7);
				enemy9.frame = 3;
				enemy9.animations.add('eRight', [2, 3, 6], 3, true);
				enemy9.animations.add('eLeft', [1, 5, 4], 3, true);
				enableBody = true;
				enemy9.body.collideWorldBounds =true;
				enemy9.body.velocity.setTo(40, 0);
		// enemy10 = this.game.add.sprite(1023.25, 409.78, 'bat');
		// 	this.game.physics.arcade.enable(enemy10);
		// 		enemy10.anchor.set(0,0.7);
		// 		enemy10.frame = 3;
		// 		enemy10.animations.add('fly', [0, 1, 2, 3, 4], 5, true);
		// 		enableBody = true;
		// 		enemy10.body.collideWorldBounds =true;
		// 		enemy10.body.velocity.setTo(40, 0);
		// enemy11 = this.game.add.sprite(1023.25, 409.78, 'bat');
		// 	this.game.physics.arcade.enable(enemy11);
		// 		enemy11.anchor.set(0,0.7);
		// 		enemy11.frame = 3;
		// 		enemy11.animations.add('fly', [0, 1, 2, 3, 4], 5, true);
		// 		enableBody = true;
		// 		enemy11.body.collideWorldBounds =true;
		// 		enemy11.body.velocity.setTo(40, 0);
		// enemy12 = this.game.add.sprite(1023.25, 409.78, 'bat');
		// 	this.game.physics.arcade.enable(enemy12);
		// 		enemy12.anchor.set(0,0.7);
		// 		enemy12.frame = 3;
		// 		enemy12.animations.add('fly', [0, 1, 2, 3, 4], 5, true);
		// 		enableBody = true;
		// 		enemy12.body.collideWorldBounds =true;
		// 		enemy12.body.velocity.setTo(40, 0);
		// enemy13 = this.game.add.sprite(1023.25, 409.78, 'bat');
		// 	this.game.physics.arcade.enable(enemy13);
		// 		enemy13.anchor.set(0,0.7);
		// 		enemy13.frame = 3;
		// 		enemy13.animations.add('fly', [0, 1, 2, 3, 4], 5, true);
		// 		enableBody = true;
		// 		enemy13.body.collideWorldBounds =true;
		// 		enemy13.body.velocity.setTo(40, 0);						



		this.enemy1 = enemy1;
			enemy1.animations.play('eLeft');
		this.enemy2 = enemy2;
			enemy2.animations.play('eRight');
		this.enemy3 = enemy3;
			enemy3.animations.play('eLeft');
		this.enemy4 = enemy4;
			enemy4.animations.play('eRight');
		this.enemy5 = enemy5;
			enemy5.animations.play('eLeft');
		this.enemy6 = enemy6;
			 enemy6.animations.play('eRight');
		this.enemy7 = enemy7;
			enemy7.animations.play('eLeft');
		this.enemy8 = enemy8;
			enemy8.animations.play('eRight');
		this.enemy9 = enemy9;
			enemy9.animations.play('eRight');

		enemies = this.game.add.physicsGroup();
			enemies.add(enemy1);
			enemies.add(enemy2);
			enemies.add(enemy3);
			enemies.add(enemy4);
			enemies.add(enemy5);
			enemies.add(enemy6);
			enemies.add(enemy7);
			enemies.add(enemy8);
			enemies.add(enemy9);
		
			enemies.enableBody = true;
			enemies.physicsBodyType = Phaser.Physics.ARCADE;

	

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
			this.player.body.velocity.y = jumpSpeed;
		}, this);

		this.jumpKeyPressed.onUp.add(function(){
			this.player.jump = false;
			this.player.body.velocity.y = -jumpSpeed;
			this. player.body.touching.down;
		}, this);

		// sfx for kill
			this.sfx = {
				kill: this.game.add.audio('sfx:kill')
			};


		//win door
		door = this.game.add.sprite(1227.13, 629.66, 'door');
		this.game.physics.arcade.enable(door);
				door.anchor.set(0,1);
				door.body.collideWorldBounds =true;
				door.enableBody = true;
				door.visible = false;

		this.door = door
	
	}; // end of create
	
	PlayState.update = function(){

		// add collision between layers and objects
		this.game.physics.arcade.collide(this.player, this.collisionLayer);
		this.game.physics.arcade.collide(enemies, this.collisionLayer);
		this.game.physics.arcade.collide(enemies, this.pathLayer);

		// add collision between objects and functions for what to do
		this.game.physics.arcade.overlap(this.player, enemies, collisionHandler, null, this);
		this.game.physics.arcade.overlap(this.player, door, youWin, null, this);

		// movement detection
		if(this.player.moveRight && !this.player.moveLeft){
			this.player.animations.play('fumiRight');
			
		}
		else if(!this.player.moveRight && this.player.moveLeft){
				this.player.animations.play('fumiLeft');
		}
		else{
			this.player.animations.stop();
		}

		if (this.player.jump){
			this.player.animations.play('fumiJump');
		}


		// enemy walk redirection if's

		//enemy1
		if (enemy1.body.touching.right || enemy1.body.blocked.right){
			enemy1.body.velocity.setTo(-40, 0); //turn left
			enemy1.animations.play('eLeft');
		}
		else if (enemy1.body.touching.left || enemy1.body.blocked.left){
			enemy1.body.velocity.setTo(40, 0); //turn right
			enemy1.animations.play('eRight');
		}

		//enemy 2
		if (enemy2.body.touching.right || enemy2.body.blocked.right){
			enemy2.body.velocity.setTo(-40, 0);
			enemy2.animations.play('eLeft');
		}
		else if (enemy2.body.touching.left || enemy2.body.blocked.left){
			enemy2.body.velocity.setTo(40, 0);
			enemy2.animations.play('eRight');
		}

		//enemy 3
		if (enemy3.body.touching.right || enemy3.body.blocked.right){
			enemy3.body.velocity.setTo(-40, 0);
			enemy3.animations.play('eLeft');
		}
		else if (enemy3.body.touching.left || enemy3.body.blocked.left){
			enemy3.body.velocity.setTo(40, 0);
			enemy3.animations.play('eRight');
		}

		//enemy 4
		if (enemy4.body.touching.right || enemy4.body.blocked.right){
			enemy4.body.velocity.setTo(-40, 0);
			enemy4.animations.play('eLeft');
		}
		else if (enemy4.body.touching.left || enemy4.body.blocked.left){
			enemy4.body.velocity.setTo(40, 0);
			enemy4.animations.play('eRight');
		}

		//enemy 5
		if (enemy5.body.touching.right || enemy5.body.blocked.right){
			enemy5.body.velocity.setTo(-40, 0);
			enemy5.animations.play('eLeft');
		}
		else if (enemy5.body.touching.left || enemy5.body.blocked.left){
			enemy5.body.velocity.setTo(40, 0);
			enemy5.animations.play('eRight');
		}

		//enemy 6
		if (enemy6.body.touching.right || enemy6.body.blocked.right){
			enemy6.body.velocity.setTo(-40, 0);
			enemy6.animations.play('eLeft');
		}
		else if (enemy6.body.touching.left || enemy6.body.blocked.left){
			enemy6.body.velocity.setTo(40, 0);
			enemy6.animations.play('eRight');
		}

		//enemy 7
		if (enemy7.body.touching.right || enemy7.body.blocked.right){
			enemy7.body.velocity.setTo(-40, 0);
			enemy7.animations.play('eLeft');
		}
		else if (enemy7.body.touching.left || enemy7.body.blocked.left){
			enemy7.body.velocity.setTo(40, 0);
			enemy7.animations.play('eRight');
		}

		//enemy 8
		if (enemy8.body.touching.right || enemy8.body.blocked.right){
			enemy8.body.velocity.setTo(-40, 0);
			enemy8.animations.play('eLeft');
		}
		else if (enemy8.body.touching.left || enemy8.body.blocked.left){
			enemy8.body.velocity.setTo(40, 0);
			enemy8.animations.play('eRight');
		}

		//enemy 9
		if (enemy9.body.touching.right || enemy9.body.blocked.right){
			enemy9.body.velocity.setTo(-40, 0);
			enemy9.animations.play('eLeft');
		}
		else if (enemy9.body.touching.left || enemy9.body.blocked.left){
			enemy9.body.velocity.setTo(40, 0);
			enemy9.animations.play('eRight');
		}


	};// end of update


	// what happens between the player and enemies
	function collisionHandler (player, enemies){
		if (player.body.velocity.y > 0){
			enemies.kill();
			this.sfx.kill.play();
		}
		else {
			this.sfx.kill.play();
			levelMusic.stop();
			this.game.state.restart();
		}
	};

	// win function
	function youWin (){
		levelMusic.stop();
		this.game.state.start('win');
	};
	
	//music loop function
	function playLevelMusic() {
			    levelMusic.play('', 0, 1, true);
					};



