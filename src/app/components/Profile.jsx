'use client'
import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import Image from 'next/image'
import styles from './profile.module.css'
import Game from './Game'
import ButtonLinkedin from './Button'


const Profile = () => (
  <Box borderRadius={'8px'} height={'688.5px'} width={'100%'} bgcolor={'#1D2226'} display={'flex'} flexDirection={'column'}>

    <Box id='game' width={'100%'} bgcolor={'white'} height={'301px'}>
      {/* Header - Juego */}
      <Game />
    </Box>

    <Box width={'100%'} height={'233px'}  >
      <Image className={styles.avatar} width={160} height={172} alt='Foto de perfil de Carlos Ternera' src={'/images/avatar.png'} />

      <Image className={styles.noti} width={24} height={24} alt='Foto de perfil de Carlos Ternera' src={'/images/noti.png'} />

      <Box mt={'100px'} ml={'30px'} display={'flex'} flexDirection={'column'} gap={'8px'}>
        <Box display={'flex'} justifyContent={'space-between'} width={'95%'}>
          <Box>
            <Typography fontWeight={'700'} fontSize={'23px'}>Carlos Ternera</Typography>
            <Typography fontSize={'15px'}>Desarrollador Web Frontend | Next | Node js | Java</Typography>
          </Box>
          <Box display={'flex'} gap={'10px'} alignItems={'center'}>
            <Image style={{ backgroundColor: 'white' }} src={'/images/ugma.png'} alt='logo ugma' width={32} height={32} />
            <Typography fontWeight={'700'} fontSize={'14px'}>Universidad Gran Mariscal <br />
              de Ayacucho</Typography>
          </Box>
        </Box>

        <Box display={'flex'} gap={'5px'}>
          <Typography fontSize={'14px'}>Venezuela &bull;</Typography>
          <Typography fontSize={'14px'} fontWeight={'700'} color={'#70B5F9'}>Informacion de contacto</Typography>
        </Box>

        <Typography color={'#70B5F9'} fontSize={'14px'} fontWeight={'700'}>Más de 500 contactos</Typography>
        <Box display={'flex'} gap={'10px'}>
          <ButtonLinkedin texto={'Conectar'} type={'contained'} icon />
          <ButtonLinkedin texto={'Enviar mensaje'} type={'outlinedBlue'} />
          <ButtonLinkedin texto={'Más'} type={'outlinedWhite'} />
        </Box>


      </Box>


    </Box>

    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'}   >
      <Box width={'95%'} padding={'10px'} borderRadius={'8px'} bgcolor={'#38434F'} mt={'50px'}  >
        <Typography fontSize={'14px'} fontWeight={'700'}>En busca de empleo</Typography>
        <Typography fontSize={'14px'}>Programador full stack · Desarrollador de front-end</Typography>
        <Typography fontSize={'14px'} fontWeight={'700'} color={'#70B5F9'}>Mostrar detalles</Typography>

      </Box>
    </Box>
  </Box>
)

export default Profile