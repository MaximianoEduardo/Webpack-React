'use strict'

// Componente sendo importado
import App from './app'
// React Imports
import React from 'react'
// import ReactDom from 'react-dom'
import { render } from 'react-dom'
// shorthand
import { AppContainer } from 'react-hot-loader'


render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.querySelector('[data-js="app"]')
)

// Hot reloader apenas em desenvolvimento
if (module.hot) {
  module.hot.accept('./app', () => {
      const NextApp = require('./app').default
      render(
        <AppContainer>
          <NextApp />
        </AppContainer>,
        document.querySelector('[data-js="app"]')
      )
  })
}
