import React from 'react'

import { InputContainer } from './styles'
function Input({value, onChange, onKeyDown, placeholder}) {
  return (
    <InputContainer>
      <input value={value} onChange={onChange} placeholder={placeholder}/>
    </InputContainer>
  )
}

export default Input