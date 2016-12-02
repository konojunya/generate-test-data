module.exports = {
  entry: "./client_src/javascripts/es6/app.js",
  output: {
    filename: './dist/javascripts/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        query: {
          presets: ["es2015","react","stage-0"]
        }
      }
    ]
  }
};