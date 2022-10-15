const HtmWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

// Configuraciones comunes a producción y desarrollo

const rules=[
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      //              'style-loader',
      // sustituimos esto por el mini-css-extract-plugin.
      // esto extraerá los css de los archivos javascript generados.
      MiniCssExtractPlugin.loader,
      
      // Translates CSS into CommonJS
      'css-loader',
      
      // Compiles Sass to CSS
      'sass-loader'
    ]    
  },
  {
    test: /\.js$/i,
    exclude: /(node_modules)/,
    use: 'babel-loader'
  }
];

const plugins=[
  new HtmWebpackPlugin({
    title: 'Gaming directory!!!',
    template: '../public/index.html',
    filename: 'index.html',
    chunks: ['main']
  }),
  new HtmWebpackPlugin({
    title: 'Gaming detail!!!',
    template: '../public/detail.html',
    filename: 'detail.html',
    chunks: ['detail']
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
    chunkFilename: '[id].[contenthash].css'
  })
];

module.exports={
  //Establece el directorio por defecto para los entry points
  context: __dirname+'/src',

  entry: {
    // main: './src/index.js',
    // detail: './src/detail.js',
    main: './index.js',
    detail: './detail.js'
  },

  module: {
    rules: rules
  },

  plugins: plugins
}