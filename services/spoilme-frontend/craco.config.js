const { addBeforeLoader, loaderByName } = require("@craco/craco");

module.exports = {
  webpack: {
    mode: 'extends',
    configure: (webpackConfig) => {
      webpackConfig.resolve.extensions.push('.yaml');
      const yamlLoader = {
        test: /\.ya?ml$/,
        type: 'json',
        exclude: /node_modules/,
        use: require.resolve('yaml-loader')
      };

      addBeforeLoader(webpackConfig, loaderByName('file-loader'), yamlLoader);

      return webpackConfig;
    } 
  }
};