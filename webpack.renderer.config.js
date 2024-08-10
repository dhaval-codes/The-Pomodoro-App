const rules = require("./webpack.rules");
const path = require("path");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  // Entry point for your renderer process
  entry: "./src/renderer/index.js",
  output: {
    path: path.resolve(__dirname, "dist/renderer"),
    filename: "bundle.js",
  },
  resolve: {
    fallback: {
      fs: false,
      path: require.resolve("path-browserify"),
    },
  },
};
