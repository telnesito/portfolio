import React from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import styles from './profile.module.css'


const Profile = () => (
  <Box height={'558.5px'} width={'100%'} bgcolor={'#1D2226'}>
    <Box id='game' width={'100%'} bgcolor={'white'} height={'201px'}>
      {/* Header - Juego */}
    </Box>

    <Box width={'100%'} height={'233px'}  >
      <Image className={styles.avatar} width={160} height={172} alt='Foto de perfil de Carlos Ternera' src={'/images/avatar.png'} />
    </Box>

    <Box width={'100%'}   >
      {/* En busca de empleo...*/}
    </Box>
  </Box>
)

export default Profile