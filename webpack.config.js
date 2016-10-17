var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: 'dist/js/bundle.js'
  },
  plugins: [
    new ExtractTextPlugin('dist/styles/main.css', {
      allChunks: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react' ] }
      },
        {
            test: /\.css$/,
            loader: 'style!css?modules',
            include: /flexboxgrid/,
        },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  }
};
