import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
const Education = () => {
  return (
    <Box
      component={'section'}
      height={'auto'}
      paddingTop={'20px'}
      paddingBottom={'20px'}
      bgcolor={'#1D2226'}
      width={'100%'}
      borderRadius={'8px'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box
        width={'95%'} display={'flex'} flexDirection={'column'} gap={'15px'}
      >
        <Typography fontSize={'19px'}>Educación</Typography>

        <Box gap={'10px'} display={'flex'} justifyContent={'initial'} alignItems={'initial'}>
          <Box>
            <Image style={{
              backgroundColor: 'white',
              padding: '2px'
            }} width={50} height={50} alt='logo ugma' src={'/images/ugma.png'} />
          </Box>

          <Box display={'flex'} flexDirection={'column'}>
            <Typography
              fontSize={'16px'}
              fontWeight={'600'}
            >Universidad Gran Mariscal de Ayacucho</Typography>
            <Typography
              fontSize={'13px'}
            >Ingeniero en Sistemas</Typography>
            <Typography fontSize={'13px'} color={'#FFFFFF50'}>mar. 2020 - mar.2024</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Education