var webpack = require("webpack")
var path = require("path")

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: "./client_src/javascripts/es6/app.js",
  output: {
    path: __dirname + "/dist/javascripts",
    filename: 'bundle.js',
    libraryTarget: "umd"
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
  },
  plugins: [
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ],
  externals: {
    "superagent": false
  },
  debug: true
};