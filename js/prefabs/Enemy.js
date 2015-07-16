var Platformer = Platformer || {};

Platformer.Enemy = function(game, x, y, key, speed, tilemap) {
    Phaser.Sprite.call(this, game, x, y, key);

    this.game = game;
    this.tilemap = tilemap;
    this.anchor.setTo(0.5);

    if(!speed) {
        speed = (40 * Math.random() + 20) * (Math.random() < 0.5 ? 1 : -1);
    }

    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;
    this.body.bounce.set(1, 0);
    this.body.velocity.x = speed;
};

Platformer.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Platformer.Enemy.prototype.constructor = Platformer.Enemy;

Platformer.Enemy.prototype.update = function() {

    var direction;

    //make it look in the direction it is moving
    if(this.body.velocity.x > 0) {
        this.scale.setTo(-1, 1);
        direction = 1;
    }
    else {
        this.scale.setTo(1, 1);
        direction = -1;
    }

    //make it view ahead and detect cliffs
    var nextX = this.x + direction * (Math.abs(this.width)/2 + 1);
    var nextY = this.bottom + 1;

    var nextTile = this.tilemap.getTileWorldXY(nextX, nextY, this.tilemap.tileWidth, this.tilemap.tileHeight, 'collisionLayer');

    if(!nextTile && this.body.blocked.down) {
        this.body.velocity.x *= -1;
    }
};