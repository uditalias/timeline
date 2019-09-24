const merge = require("webpack-merge");
const base = require("./base");

module.exports = (config = {}) =>
  merge(base(config), {
    mode: "development"
  });
