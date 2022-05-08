const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

const moduleFederationSetup = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    webpackConfig.output.publicPath = "auto";

      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new ModuleFederationPlugin(
          {
           name: "remote",
           filename: "remoteEntry.js",
           exposes: {
             "./Hello": "./src/components/Hello"
           },
           shared: {
            ...deps,
            react: {
              singleton: true,
              requiredVersion: deps.react,
            },
            "react-dom": {
              singleton: true,
              requiredVersion: deps["react-dom"],
            },
          },
          }
        ),
      ];

    return webpackConfig;
  },
};

module.exports = {
    plugins: [ { plugin: moduleFederationSetup }],
    devServer: {
      port: 3001
    }
};