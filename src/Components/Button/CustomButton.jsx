import React from 'react'
import Button from 'react-bootstrap/esm/Button'

function CustomButton({children, handleButtonValue, customStyle}) {
  return (
    <>
      <Button onClick={handleButtonValue} variant={customStyle} >{children}</Button>
    </>
  )
}

export default CustomButton
