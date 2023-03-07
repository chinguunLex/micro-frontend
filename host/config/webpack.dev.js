const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const shared = Object.entries(deps).reduce(
  (result, [key, requiredVersion]) => ({
    ...result,
    [key]: { singleton: true, eager: false, requiredVersion },
  }),
  {}
);

const devConfig = {
  mode: 'development',
  devServer: {
    port: 3003,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        notes_mfe: '_iag_common_notes_mfe@https://asb.sit4.digital.iag.com.au/mfe/notes-mfe/latest/remoteEntry.js',
        identity_mfe: 'identity_mfe_3_x_x@https://asb.sit4.digital.iag.com.au/mfe/identity-mfe/3.x.x/remoteEntry.js'
      },
      shared,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
