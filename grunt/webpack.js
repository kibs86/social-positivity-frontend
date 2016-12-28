'use strict';

let webpack = require('webpack');
let path = require('path');

module.exports = {
  options: {
    entry: {
      application: './index.js',
      specs: './spec/_all.js',
      // uncomment for bootstrap instead of materialize
      // vendor: ['jquery', 'bootstrap-sass'],
      // uncomment for materialize instead of bootstrap
      vendor: ['jquery', 'materialize-css'],
    },

    output: {
      filename: '[name].js',
      path: __dirname + '/../public',
      publicPath: 'public/',
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],

    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015'],
          },
        },
        {
          test: /\.css/,
          loader: 'style!css',
          includePaths: [path.resolve(__dirname, './node_modules')],
        },
        {
          test: /\.scss/,
          loader: 'style!css!sass',
          includePaths: [path.resolve(__dirname, './node_modules')],
        },
        {
          test: /\.woff[\d]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        },
        {
          test: /\.(ttf|eot|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader',
        },
        {
          test: /\.(hbs|handlebars)$/,
          loader: 'handlebars-loader',
          query: {
            helperDirs: [
              __dirname + '/../assets/scripts/templates/helpers',
            ],
          },
        },
      ],
    },

    resolve: {
      alias: {
        handlebars: 'handlebars/dist/handlebars.js',
        jquery: path.resolve(__dirname, '../node_modules/jquery/dist/jquery.js'), // The ../node_modules seems hacky JAF
      },
    },
    stats: {
      colors: true,
      modules: true,
      reasons: true,
    },
  },

  build: {
    failOnError: true,
    watch: false,
    keepalive: false,
  },
};
