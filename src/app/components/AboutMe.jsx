import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { Github } from '@react-symbols/icons'
const AboutMe = () => {
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
      <Box width={'95%'} display={'flex'} flexDirection={'column'} gap={'15px'}>
        <Typography fontSize={'19px'} fontWeight={'500'}> Acerca de</Typography>
        <Typography fontSize={'13px'}>¡Bienvenido a mi portafolio! 👋
          <br />
          <br />
          Soy un apasionado desarrollador web con más de 1 año de experiencia. Trabajo con HTML, CSS, JavaScript, Node.js, React, MUI, Java, MySQL, PostgreSQL, MongoDB, Firebase, Figma, Git, GitHub, Bootstrap, React Bootstrap, MVC y ORM
          <br />
          <br />
          💻 Enfocado en crear aplicaciones web rápidas y escalables con Node.js y React, y diseño moderno utilizando Material UI y Bootstrap. Además en desarrollo back-end con Java y manejo de bases de datos MySQL, PostgreSQL y MongoDB.
          <br />
          <br />
          🚀 Siempre al tanto de las últimas tendencias y mejores prácticas en desarrollo web. ¡Conéctate para explorar oportunidades laborales y hablar sobre tecnología y proyectos interesantes!
        </Typography>

      </Box>
    </Box >
  )
}

export default AboutMe