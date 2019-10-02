const webpack = require("webpack");

module.exports = (
  config = {
    destDir: "",
    contextPath: ""
  }
) => {
  const conf = {
    context: config.contextPath,

    target: "web",

    entry: {
      umd: "umd.ts"
    },

    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      modules: [config.contextPath, "node_modules"]
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: "../tsconfig.json",
                compilerOptions: {
                  declaration: false
                }
              }
            }
          ],
          exclude: /node_modules/
        }
      ]
    },

    output: {
      path: config.destDir,
      library: ["Timeline"],
      libraryTarget: "umd"
    },

    plugins: [new webpack.ProgressPlugin()]
  };

  return conf;
};
