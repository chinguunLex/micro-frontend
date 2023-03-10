const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const deps = require("./package.json").dependencies

const moduleFederationSetup = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    // Specify the base path for all the assets within your application.
    // this is needed for requesting chunks.
    webpackConfig.output.publicPath = "auto"

    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new ModuleFederationPlugin({
        name: "remote",
        filename: "remoteEntry.js",
        exposes: {
          "./CustomerTable": "./src/components/CustomerTable",
          "./customerRoutes": "./src/components/customerRoutes",
          "./CustomerActivity": "./src/components/CustomerActivity",
          "./CustomerTableApp": "./src/components/CustomerTableApp",
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
      }),
    ]

    return webpackConfig
  },
}

module.exports = {
  plugins: [{ plugin: moduleFederationSetup }],
  devServer: {
    port: 3001,
  },
}
