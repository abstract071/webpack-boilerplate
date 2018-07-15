import React, { Fragment } from 'react'
import { hot } from 'react-hot-loader'

import Button from './components/Button'

import './scss/main.scss'
import nodeImgURI from './images/nodejs.jpg'
import reactImgURI from './images/react.png'
import angularImgURI from './images/angular.svg'


const App = () => {
  return (
    <Fragment>
      <Button/>
      <br/>
      <img src={ nodeImgURI } />
      <img src={ reactImgURI } />
      <img src={ angularImgURI } />
    </Fragment>
  )
}

export default hot( module )( App )
