// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = webpackMerge(commonConfig, {
  mode: "development",
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader",
      options: {
        hotReload: true // disables Hot Reload
      }
    }
  ]
  //   plugins: [
  //     new BundleAnalyzerPlugin(),
  //   ]
});
