const { merge }=require('webpack-merge');
const common=require('./webpack.common');

const prodConfig= {
  mode: 'production',
  output:{
    //Asegurar un hash que permita que cualquier cambio en los archivos que afecten al dist, será correctamente inyectado para evitar problemas con los cacheados.
    filename: '[name].[contenthash].js',
    //limpia el derectorio cuando hagamos un build
    clean: true
  },

  //Optimiza la cantidad de datos por archivo, particionandolos
  optimization: {
    splitChunks:{
      chunks: 'all'
    }
  }
}

module.exports=merge(common,prodConfig);