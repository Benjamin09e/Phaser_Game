let main = {
	preload: function() {
		// Charger les fichiers
		game.load.image('player', 'assets/player.png');
	},
	create: function() {
		// Afficher et paramétrer
		game.stage.backgroundColor = '#3C4C55';
		//game.physics.startSystem(Phaser.Physics.ARCADE);
		game.renderer.renderSession.roudPixels = true;

		// Player
		this.player = game.add.sprite(game.width/2, game.height/2, 'player');
		this.player.anchor.setTo(0.5);
	},
	update: function() {
		// Mécanique du jeu 60 fps
	}
};

var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv');

game.state.add('main', main);
game.state.start('main');