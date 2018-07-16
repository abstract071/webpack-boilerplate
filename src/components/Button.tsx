import React from 'react'


interface ButtonProps {
  text: string
}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={ () => console.log( 'test again' ) }>{ props.text }</button>
  )
}

export default Button
