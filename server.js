'use strict'

// Imports
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

// Configurando o server
new WebpackDevServer(webpack(config),{
  // Buscando informações dentro do arquivo
  publicPath: config.output.publicPath,
  // reload
  hot: true,
  historyApiFallback: true,
  stats:{ colors: true}
}).listen(3000, (err) => {
  // caso aconteca algum erro retornara no console
  if (err) {
    return console.log(err)
  }
  console.log('Listem on http://localhost:3000');
})
