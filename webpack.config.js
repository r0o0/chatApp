const path = require('path');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {loader: 'babel-loader'}
      },
      {
        test: /\.sass$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
    ]
  },
  // 플러그인 모으는 곳
  plugins: [
    // able to import html file
    // html 파일을 import 할 수 있게 해주는 플러그인
    new HtmlWebpackPlugin({ 
      filename: 'index.html',
      template: './src/index.html',
      inject: false,
      hash: true
    }),
    // clean dist folder for unused files
    // dist 폴더에서 안쓰는 파일은 생성 안 하도록 해주는 플러그인
    new CleanWebpackPlugin(['public']),
    // enable hot module replacement
    new MiniCssExtractPlugin({
      filename: 'main.[hash].css'
    }),
    new WebpackMd5Hash()
  ],
  // 코드 바뀌는것을 감지하고 dist 폴더에 업데이트해고 live server 구성
  devServer: {
    compress: true,
    open: true,
    port: 7293
  }
};

module.exports = config;