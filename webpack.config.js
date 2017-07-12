const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    "script-loader!jquery/dist/jquery.min.js",
    "script-loader!foundation-sites/dist/foundation.min.js",
    "./app/app.jsx"
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),
    new webpack.LoaderOptionsPlugin({
            test: /\.scss$/,
            options: {
                sassLoader: {
                    includePaths: [
                        path.resolve(__dirname, './node_modules/foundation-sites/scss')
                    ]
                }
            }
        })
  ],
  output: {
    path: path.resolve(__dirname),
    filename: "./public/bundle.js"
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "./app/components"),
      path.resolve(__dirname, "./app/api")

    ],
    alias: {
      "applicationStyles": path.resolve(__dirname, 'app/styles/app.scss'),
      //components are no longer required given that ./app/compnents route is in resolve.modules
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        options: {
            presets: ['react', 'es2015', 'stage-0']
        }
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
