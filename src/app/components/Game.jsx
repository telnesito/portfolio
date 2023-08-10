'use client'
import React from 'react'
import Phaser from 'phaser'
import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'

const Game = () => {

  let platforms, player;

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      height: 301,
      width: 2000,
      parent: 'game',
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 300 },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  function preload() {
    // Agregar mapa
    this.load.image('bg', 'gameAssets/BG.png')
    this.load.image('p-left', 'gameAssets/platformLeft.png')
    this.load.image('p-center', 'gameAssets/platformCenter.png')
    this.load.image('p-right', 'gameAssets/platformRight.png')
    this.load.image('f-center', 'gameAssets/f-center.png')
    this.load.image('f-left', 'gameAssets/f-left.png')
    this.load.image('f-right', 'gameAssets/f-right.png')
    this.load.image('bigBush', 'gameAssets/bigBush.png')
    this.load.image('smallBush', 'gameAssets/smallBush.png')

    this.load.image('tree', 'gameAssets/Tree.png')

    this.load.image('arrow', 'gameAssets/ArrowSign.png')

    this.load.image('Skeleton', 'gameAssets/Skeleton.png')

    // Agregar el jugador idle

    this.load.image('player_idle', 'gameAssets/player/idle_1.png')
    this.load.image('player_idle_2', 'gameAssets/player/idle_2.png')
    this.load.image('player_idle_3', 'gameAssets/player/idle_3.png')
    this.load.image('player_idle_4', 'gameAssets/player/idle_4.png')
    this.load.image('player_idle_5', 'gameAssets/player/idle_5.png')
    this.load.image('player_idle_6', 'gameAssets/player/idle_6.png')
    this.load.image('player_idle_7', 'gameAssets/player/idle_7.png')
    this.load.image('player_idle_8', 'gameAssets/player/idle_8.png')
    this.load.image('player_idle_9', 'gameAssets/player/idle_9.png')
    this.load.image('player_idle_10', 'gameAssets/player/idle_10.png')
    this.load.image('player_idle_11', 'gameAssets/player/idle_11.png')
    this.load.image('player_idle_12', 'gameAssets/player/idle_12.png')








  }
  // this.sys.game.config.width
  function create() {
    this.add.image(500, 0, 'bg')
    platforms = this.physics.add.staticGroup()
    // Estructura no flotante
    platforms.create(300, 301, 'p-left')
    platforms.create(400, 301, 'p-center')
    platforms.create(500, 301, 'p-right')
    // Estructura flotante
    platforms.create(900, 200, 'f-center')
    platforms.create(800, 200, 'f-left')
    platforms.create(1000, 200, 'f-right')

    this.add.image(480, 220, 'smallBush').setScale(0.5)
    this.add.image(380, 220, 'bigBush').setScale(0.5)

    this.add.image(400, 120, 'tree')

    this.add.image(900, 100, 'arrow').setDepth(1)
    this.add.image(1000, 130, 'Skeleton').setScale(0.7)
    this.add.image(900, 120, 'bigBush').setScale(0.75).setDepth(0)


    player = this.physics.add.sprite(400, 200, 'player_idle').setScale(2)

    player.setCollideWorldBounds(true);

    this.physics.add.collider(player, platforms);


    // Animacion

    this.anims.create({
      key: 'idleAnims', // Nombre de la animación
      frames: [
        { key: 'player_idle' },
        { key: 'player_idle_2' },
        { key: 'player_idle_3' },
        { key: 'player_idle_4' },
        { key: 'player_idle_5' },
        { key: 'player_idle_6' },
        { key: 'player_idle_7' },
        { key: 'player_idle_8' },
        { key: 'player_idle_9' },
        { key: 'player_idle_10' },
        { key: 'player_idle_11' },
        { key: 'player_idle_12' },

        // ... agregar los otros frames aquí
      ],
      frameRate: 10, // Velocidad de la animación en fps
      repeat: -1 // Repetir infinitamente
    });

    // Iniciar la animación en el sprite
    player.play('idleAnims');



  }

  function update() {

  }
  return (
    <Box>
    </Box>
  )
}

export default Game