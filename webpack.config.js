var path = require("path"); //path is node module to help parsing and transforming filepaths

module.exports = {
  entry: [ "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080",
    path.resolve(__dirname, "app/main.js")
  ],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".json"]
  }
};
