const { merge } = require('webpack-merge');
const common=require('./webpack.common');

const devConfig={
  mode: 'development',
  devServer:{
    client: {
      overlay: true
    }
  }
}

module.exports=merge(common,devConfig);