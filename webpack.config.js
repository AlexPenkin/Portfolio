const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';


module.exports = {
  entry: path.resolve(__dirname + '/app/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname + '/dist'),
    publicPath: '/'
  },
  devServer: {
    publicPath: "/dist",
    contentBase: "./dist",
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html'
    }),
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'app'),
      use: [{
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            'react',
            'latest', ['es2015'],
          ],
          plugins: [
            'transform-object-rest-spread',
            'transform-es2015-destructuring'
          ]
        }
      }]
    }]
  }
}