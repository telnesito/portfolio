'use client'
import React from 'react'
import Phaser from 'phaser'
import { Box } from '@mui/material'
import { useEffect } from 'react'

const Game = () => {

  let platforms, player, cursor, camera, newPlatforms;

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      height: 301,
      width: '100%',

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
    this.load.image('caja', 'gameAssets/Crate.png')
    this.load.image('arena-c', 'gameAssets/arena-c.png')
    this.load.image('arena-l', 'gameAssets/arena-l.png')
    this.load.image('arena-r', 'gameAssets/arena-r.png')

    this.load.spritesheet('f-center', 'gameAssets/f-center.png', {
      frameWidth: 128,
      frameHeight: 80
    })
    this.load.spritesheet('f-left', 'gameAssets/f-left.png', {
      frameWidth: 128,
      frameHeight: 80
    })
    this.load.spritesheet('f-right', 'gameAssets/f-right.png', {
      frameWidth: 128,
      frameHeight: 80
    })
    this.load.image('bigBush', 'gameAssets/bigBush.png')
    this.load.image('smallBush', 'gameAssets/smallBush.png')

    this.load.image('tree', 'gameAssets/Tree.png')

    this.load.image('arrow', 'gameAssets/ArrowSign.png')

    this.load.image('Skeleton', 'gameAssets/Skeleton.png')

    this.load.image('lapida', 'gameAssets/lapida.png')
    this.load.image('cruz', 'gameAssets/cruz.png')

    this.load.image('bushSmall', 'gameAssets/DeadBush.png')


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

    // Agregar el jugador run

    this.load.image('player_run', 'gameAssets/player/run (1).png')
    this.load.image('player_run_2', 'gameAssets/player/run (2).png')
    this.load.image('player_run_3', 'gameAssets/player/run (3).png')
    this.load.image('player_run_4', 'gameAssets/player/run (4).png')
    this.load.image('player_run_5', 'gameAssets/player/run (5).png')
    this.load.image('player_run_6', 'gameAssets/player/run (6).png')
    this.load.image('player_run_7', 'gameAssets/player/run (7).png')
    this.load.image('player_run_8', 'gameAssets/player/run (8).png')

    // Agregar al jugador jump


    this.load.image('player_jump', 'gameAssets/player/jump.png')



  }
  // this.sys.game.config.width
  function create() {
    this.add.image(0, 0, 'bg').setScale(2)
    platforms = this.physics.add.staticGroup()
    // Estructura no flotante
    platforms.create(300, 301, 'p-left')
    platforms.create(400, 301, 'p-center')
    platforms.create(500, 301, 'p-right')


    platforms.create(-200, 351, 'p-left')
    platforms.create(-100, 351, 'p-center')
    platforms.create(0, 351, 'p-right')

    platforms.create(-925, 400, 'p-left')
    platforms.create(-825, 400, 'p-center')
    platforms.create(-725, 400, 'p-right')

    platforms.create(300, 426, 'arena-l')
    platforms.create(400, 426, 'arena-c')
    platforms.create(500, 426, 'arena-r')


    // Caja
    platforms.create(-800, 285, 'caja')
    // Estructura flotante
    platforms.create(900, 200, 'f-center')
    platforms.create(800, 200, 'f-left')
    platforms.create(1000, 200, 'f-right')

    platforms.create(-200, 50, 'f-left')
    platforms.create(-100, 50, 'f-center')
    platforms.create(0, 50, 'f-right')


    platforms.create(-500, 200, 'f-center')
    platforms.create(-600, 200, 'f-left')
    platforms.create(-400, 200, 'f-right')

    platforms.create(400, -20, 'f-center')
    platforms.create(300, -20, 'f-left')
    platforms.create(500, -20, 'f-right')

    platforms.create(850, -40, 'f-left')
    platforms.create(950, -40, 'f-right')


    this.add.image(0, 260, 'lapida').setScale(1)
    this.add.image(-100, 250, 'cruz').setScale(1)
    this.add.image(-200, 260, 'lapida').setScale(1)
    this.add.image(-150, 250, 'bushSmall')


    this.add.image(480, 220, 'smallBush').setScale(0.5)
    this.add.image(380, 220, 'bigBush').setScale(0.5)

    this.add.image(400, 120, 'tree')

    this.add.image(900, 120, 'arrow').setDepth(1)
    this.add.image(1000, 150, 'Skeleton').setScale(0.7).setDepth(1)
    this.add.image(900, 140, 'bigBush').setScale(0.75).setDepth(0)

    this.add.image(500, -100, 'arrow').setDepth(1)


    // camera = this.cameras.add();



    // (x, y, width, height);
    // Player
    player = this.physics.add.sprite(0, 200, 'player_idle').setScale(2)
    this.physics.add.collider(player, platforms);
    player.setBounce(0.2)
    player.body.setGravityY(300);


    // camara
    this.cameras.main.startFollow(player);
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


    this.anims.create({
      key: 'runAnims', // Nombre de la animación
      frames: [
        { key: 'player_run' },
        { key: 'player_run_2' },
        { key: 'player_run_3' },
        { key: 'player_run_4' },
        { key: 'player_run_5' },
        { key: 'player_run_6' },
        { key: 'player_run_7' },
        { key: 'player_run_9' },

        // ... agregar los otros frames aquí
      ],
      frameRate: 10, // Velocidad de la animación en fps
      repeat: -1 // Repetir infinitamente
    });

    player.anims.play("idleAnims");


    this.anims.create({
      key: 'jumpAnims', // Nombre de la animación
      frames: [
        { key: 'player_jump' },


        // ... agregar los otros frames aquí
      ],
      frameRate: 100, // Velocidad de la animación en fps
      // repeat: -1 // Repetir infinitamente
    });

    console.log(player)

    // Crear el cursor

    cursor = this.input.keyboard.createCursorKeys();

  }

  function update() {


    if (cursor.left.isDown) {
      player.setVelocityX(-160);
      player.anims.play("runAnims", true);
    } else if (cursor.right.isDown) {
      player.setVelocityX(+160);
      player.anims.play("runAnims", true);
    } else {
      player.setVelocityX(0);
      player.anims.play("idleAnims", true);
    }




    if (cursor.up.isDown && player.body.touching.down) {
      player.setVelocityY(-450);

    }

    if (player.y > 900) {
      player.y = 200
      player.x = 0
    }


  }
  return (
    <Box>
    </Box>
  )
}

export default Game