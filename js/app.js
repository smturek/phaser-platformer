var Platformer = Platformer || {};

Platformer.dim = Platformer.getGameLandscapeDimensions(700, 350);

Platformer.game = new Phaser.Game(Platformer.dim.w, Platformer.dim.h, Phaser.CANVAS);

Platformer.game.state.add('Boot', Platformer.BootState);
Platformer.game.state.add('Preload', Platformer.PreloadState);
Platformer.game.state.add('Game', Platformer.GameState);

Platformer.game.state.start('Boot');
