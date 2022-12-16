const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],
    mode: 'development',
};