import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
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
          height={'auto'}
          border={'1px solid #ffffff30'}
          borderRadius={'8px'}
          display={'flex'}
          flexDirection={'column'}
        >
          <Typography
            fontSize={'13px'}
            padding={'10px'}
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
              >Este currículum es un vistazo a mi trayectoria profesional, destacando los proyectos significativos en los que he trabajado y las habilidades que he cultivado. Espero que encuentres mi perfil interesante y relevante para las oportunidades que puedan surgir.Si deseas conocer más detalles sobre mi experiencia o cómo puedo contribuir a tu equipo, no dudes en ponerte en contacto conmigo.</Typography>
              <Box
                height={'70px'}
                width={'100%'}

                bgcolor={'#38434F'}
              >
                <Typography
                  fontSize={'15px'}
                  fontWeight={'700'}
                  ml={'15px'}
                  mt={'10px'}
                >Resumen - Desarrollador Web FrontEnd</Typography>

                <Typography
                  ml={'15px'}
                  fontSize={'13px'}
                  sx={{
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  <Link target='_blank' href={'images/cv.pdf'} download={'CV- CARLOS TERNERA'} >Descargar CV</Link>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography
            fontSize={'13px'}
            padding={'10px'}
            color={'#ffffff60'}>
            <Link target='_blank' href={'https://www.linkedin.com/feed/update/urn:li:activity:7088307503544852481/'}>
              Ver en LinkedIn

            </Link>
          </Typography>

        </Box>
      </Box>


    </Box>
  )
}

export default Outstanding