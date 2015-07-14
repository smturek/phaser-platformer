var Platformer = Platformer || {};

Platformer.game = new Phaser.Game(480, 360, Phaser.CANVAS);

Platformer.game.state.add('Boot', Platformer.BootState);
Platformer.game.state.add('Preload', Platformer.PreloadState);
Platformer.game.state.add('Game', Platformer.GameState);

Platformer.game.state.start('Boot');
