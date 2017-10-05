window.onload = function () {
    let game = new Phaser.Game(1344, 736, Phaser.AUTO, 'game');
    game.state.add('menu', menuState)
    game.state.add('play', PlayState);
    game.state.add('win', winState);

    game.state.start('menu');
};

