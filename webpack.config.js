var webpack = require("webpack")
var path = require("path")
module.exports = {
  entry: "./client_src/javascripts/es6/app.js",
  output: {
    path: __dirname + "/dist/javascripts",
    filename: 'bundle.js',
    libraryTarget: "commonjs2"
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
    "superagent": 'superagent'
  },
  debug: true
};