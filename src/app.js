'use strict'

// React Imports
import React from 'react'
import ReactDom from 'react-dom'
import Title from './title'


const App = React.createClass({
  render: function () {
    return (
      <div className="container">
        <Title name= 'Eduardo' lastname='Maximiano' />

      </div>
    )
  }
})

export default App
