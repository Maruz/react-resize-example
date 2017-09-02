// You can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');
const config = require('../webpack.config.js');

module.exports = {
  plugins: config.plugins.filter(
    // HtmlWebpackPlugin replaces storybook UI so need to filter it out
    p => p.constructor.name !== 'HtmlWebpackPlugin'
  ),
  module: {
    rules: config.module.rules,
  },
};
