// Configuration for Phaser

import Phaser from 'phaser';

const config = {
    type: Phaser.AUTO,
    width: 800, // Adjust for landscape mode
    height: 600,
    parent: 'phaser-game',
    backgroundColor: '#87CEEB',
    scene: {
    preload: function () {
      //this.load.image('nanozostera', '/assets/nanozostera.png'); // Add your assets folder later
    },
    create: function () {
      //this.add.image(400, 300, 'nanozostera');
    },
    update: function () {
      // Game logic here
    },
    },
};

export default config;
