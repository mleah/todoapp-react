module.exports = {
  entry: './app/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ['lodash'],
          presets: [ 'es2015', 'react' ] }
      }
    ]
  }
};
