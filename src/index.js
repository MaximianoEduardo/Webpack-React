'use strict'

// Componente sendo importado
import Title from './app'
// React Imports
import React from 'react'
// import ReactDom from 'react-dom'
import { render } from 'react-dom'
// shorthand



render(
  <Title />,
  document.querySelector('[data-js="app"]')
)
