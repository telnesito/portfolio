'use client'
import React from 'react'
import Phaser from 'phaser'
import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'

const Game = () => {

  let platforms;

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




  }
  // this.sys.game.config.width
  function create() {
    this.add.image(500, 0, 'bg')
    platforms = this.physics.add.staticGroup()
    platforms.create(300, 301, 'p-left')
    platforms.create(400, 301, 'p-center')
    platforms.create(500, 301, 'p-right')
    platforms.create(900, 200, 'f-center')
    platforms.create(800, 200, 'f-left')
    platforms.create(1000, 200, 'f-right')

    this.add.image(480, 220, 'smallBush').setScale(0.5)
    this.add.image(380, 220, 'bigBush').setScale(0.5)

    this.add.image(400, 120, 'tree')







  }

  function update() {

  }
  return (
    <Box>
    </Box>
  )
}

export default Game