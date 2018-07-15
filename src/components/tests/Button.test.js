import React from 'react'
import { shallow } from 'enzyme'

import Button from '../Button'


describe( 'Button', () => {
  const button = shallow( <Button/> )

  it( 'renders properly', () => {
    expect( button ).toMatchSnapshot()
  } )
} )
