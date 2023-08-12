import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { CERTIFICACIONES } from '../const/certificaciones'
import ButtonLinkedin from './Button'
import Image from 'next/image'
const Certification = () => {
  return (
    <Box
      component={'section'}
      height={'auto'}
      paddingTop={'20px'}
      bgcolor={'#1D2226'}
      width={'100%'}
      borderRadius={'8px'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Box
        width={'95%'} display={'flex'} flexDirection={'column'} gap={'15px'}
      >
        <Typography fontSize={'19px'}>Licencias y certificaciones</Typography>

        {CERTIFICACIONES.map(({ name, ico, exp, aptitude, credential, who }, index) => <Box borderBottom={'1px solid #ffffff20'} display={'flex'} gap={'10px'} key={index}>
          <Box>
            <Image alt='icon-certificado' width={50} height={50} src={ico} />
          </Box>
          <Box >
            <Typography fontWeight={'600'} fontSize={'16px'}>{name}</Typography>
            <Typography fontSize={'13px'}>{who}</Typography>
            <Typography mb={'10px'} fontSize={'13px'} color={'#FFFFFF50'}>Expedición: {exp}</Typography>
            <ButtonLinkedin href={credential} type={'outlinedWhite'} texto={'Mostrar credencial'} />
            <Typography mb={'10px'} fontSize={'13px'} mt={'20px'}><b>Aptitudes:</b> {aptitude}</Typography>
          </Box>
        </Box>)}
      </Box>
      <Button endIcon={<Image alt='arrow btn' height={10} width={13} src={'/images/arrow.png'} />} fullWidth variant='text' sx={{
        textTransform: 'initial',
        fontSize: '14px',
        fontWeight: '600',
        color: 'white'
      }}>Mostrar todo (14) </Button>
    </Box>
  )
}

export default Certification