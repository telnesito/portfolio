import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
const Outstanding = () => {
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
        <Typography fontSize={'19px'}>Destacado</Typography>

        <Box
          height={'300px'}
          border={'1px solid #ffffff30'}
          borderRadius={'8px'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Typography
            fontSize={'13px'}
            padding={'15px'}
            color={'#ffffff60'}>Publicación</Typography>

          <Box
            display={'flex'}
          >

            <Box width={'50%'}>
              <Image alt='cap cv' style={{ width: '100%' }} height={212} width={450} src={'/images/cv.png'} />
            </Box>



            <Box width={'50%'} display={'flex'} flexDirection={'column'} gap={'8px'}>
              <Typography
                fontSize={'15px'}
                ml={'15px'}
              >¡Hola a todos!
                <br />
                🌟 Soy un apasionado Desarrollador Web Frontend en búsqueda de nuevas oportunidades laborales. Con más de 1 año de experiencia en la creación de aplicaciones web dinámicas, estoy ansioso por seguir creciendo y aportar mi talento a proyectos innovadores.</Typography>
              <Box
                height={'70px'}
                width={'100%'}

                bgcolor={'#38434F'}
              >

              </Box>
            </Box>
          </Box>

        </Box>
      </Box>


    </Box>
  )
}

export default Outstanding