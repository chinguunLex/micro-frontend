const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

const moduleFederationSetup = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    // Specify the base path for all the assets within your application.
    // this is needed for requesting chunks.
    webpackConfig.output.publicPath = "/";

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