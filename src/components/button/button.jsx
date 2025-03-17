import React from 'react'

import { ButtonContainer } from './styles'
function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
      Adicionar Repositorio
    </ButtonContainer>
  )
}

export default Button
