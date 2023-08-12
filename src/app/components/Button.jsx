import React from 'react'
import { Button } from '@mui/material'
import Image from 'next/image'

const contained = {
  borderRadius: '16px',
  height: '32px',
  width: '114.91',
  bgcolor: '#70B5F9',
  color: 'black',
  fontWeight: '700',
  textTransform: 'initial',
  '&:hover': {
    bgcolor: '#A1D0FF',
    borderColor: '#A1D0FF'
  }
}

const outlinedBlue = {
  borderRadius: '16px',
  height: '32px',
  width: '114.91',
  color: '#70B5F9',
  fontWeight: '700',
  textTransform: 'initial',
  borderColor: '#70B5F9',
  '&:hover': {
    borderColor: '#70B5F9',
    bgcolor: '#70B5F940'
  }
}

const outlinedWhite = {
  borderRadius: '16px',
  borderColor: 'white',
  height: '32px',
  color: 'white',
  fontWeight: '700',
  textTransform: 'initial',
  '&:hover': {
    bgcolor: '#ffffff40',
    borderColor: 'white',

  }
}

// (condicion1) ? 'en caso true' : ((condicion2)? 'en caso true condicion 2':'en caso falso condicion 2')


const ButtonLinkedin = ({ type, texto, icon = false, href }) => {
  return (
    <Button
      target='_blank'
      href={href}
      startIcon={icon ? <Image width={12} height={14} src={'/images/Vector.png'} alt='add-person' /> : null}
      sx={type === 'contained' ? contained : type === 'outlinedBlue' ? outlinedBlue : outlinedWhite}
      variant={'outlined'}>{texto}</Button>
  )
}

export default ButtonLinkedin