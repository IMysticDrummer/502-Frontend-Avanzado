module.exports={
  entry: {
    main: './src/index.js',
    detail: './src/detail.js'
  },

  devServer:{
    client: {
      overlay: true
    }
  }
}