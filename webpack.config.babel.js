import HtmlWebpackPlugin from 'html-webpack-plugin'

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';

module.exports = {
  entry: './src/index.js',
  output: {
    path: './public',
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory']
      }
    ]
  },
  devServer: {
    contentBase: './public',
    port: PORT,
    host: HOST
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
  ]
};
