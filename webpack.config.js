module.exports = {
  entry: "./entry.js",
  output: {
    path: "./build",
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
