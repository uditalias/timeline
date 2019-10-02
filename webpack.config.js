const path = require("path");
const merge = require("webpack-merge");
const dev = require("./webpack/config/dev");
const prod = require("./webpack/config/prod");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const destDir = path.join(__dirname, "./umd");
const contextPath = path.join(__dirname, "./src");

module.exports = [
  merge(prod({ destDir, contextPath }), {
    output: {
      filename: "timeline.js"
    },
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: false,
            mangle: false,
            minimize: false,
            output: {
              beautify: true,
              comments: false
            }
          }
        })
      ]
    }
  }),

  merge(prod({ destDir, contextPath }), {
    output: {
      filename: "timeline.min.js"
    }
  })
];
