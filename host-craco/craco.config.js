const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const deps = require("./package.json").dependencies;

const shared = Object.entries(deps).reduce(
  (result, [key, requiredVersion]) => ({
    ...result,
    [key]: { singleton: true, eager: false, requiredVersion },
  }),
  {},
)

const moduleFederationSetup = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    // Specify the base path for all the assets within your application.
    // this is needed for requesting chunks.
    // webpackConfig.output.publicPath = "/";

    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new ModuleFederationPlugin({
        name: "host-craco",
        remotes: {
          remote: "_iag_common_notes_mfe@http://localhost:3001/remoteEntry.js",
          // remote: "notes_mfe_0_0_1@https://devlabs-fe-entry-1-k8s.env-10-100-146.iagcloud/notes-mfe/remoteEntry.js"
        },
        shared,
        // shared: {
        //   ...deps,
        //   react: {
        //     singleton: true,
        //     requiredVersion: deps.react,
        //   },
        //   "react-dom": {
        //     singleton: true,
        //     requiredVersion: deps["react-dom"],
        //   },
        // },
      }),
    ];

    return webpackConfig;
  },
};

module.exports = {
  plugins: [{ plugin: moduleFederationSetup }],
  devServer: {
    port: 3003,
  },
};
