const path = require("path");
const merge = require("webpack-merge");
const dev = require("./webpack/config/dev");
const prod = require("./webpack/config/prod");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const destDir = path.join(__dirname, "./umd");
const contextPath = path.join(__dirname, "./src");

const base = {
  entry: {
    umd: "umd.ts"
  },

  output: {
    library: ["Timeline"]
  }
};

module.exports = [
  merge(prod({ destDir, contextPath }), base, {
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

  merge(prod({ destDir, contextPath }), base, {
    output: {
      filename: "timeline.min.js"
    }
  })
];
