import React from 'react'

import 'components/Button.scss'


interface ButtonProps {
  text: string
}

const Button = ( props: ButtonProps ) => {
  console.log()
  return (
    <button
      className="btn"
      styleName="bg"
      onClick={ () => console.log( 'test again' ) }
    >
      { props.text }
    </button>
  )
}

export default Button
