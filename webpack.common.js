const HtmWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

const plugins=[
  //Esta configuraciones son necesarias en producción y desarrollo
  new HtmWebpackPlugin({
    title: 'Gaming directory!!!',
    template: './public/index.html',
    filename: 'index.html',
    chunks: ['main']
  }),
  new HtmWebpackPlugin({
    title: 'Gaming detail!!!',
    template: './public/detail.html',
    filename: 'detail.html',
    chunks: ['detail']
  })
];

const rules=[
  {
    test: /\.js$/i,
    exclude: /(node_modules)/,
    use: 'babel-loader'
  }
];

module.exports={
  entry: {
    main: './src/index.js',
    detail: './src/detail.js'
  },
  
  module: {
    rules: rules
  },

  plugins: plugins
}