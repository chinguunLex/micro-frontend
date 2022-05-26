const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

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
        notes_mfe: 'notes_mfe_0_0_1@http://localhost:3000/remoteEntry.js',
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
  ],
};

module.exports = merge(commonConfig, devConfig);
