const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "public", "main.js"),
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.js/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react"]
        }
      }
    ]
  }
};
