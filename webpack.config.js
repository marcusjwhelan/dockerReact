const path = require('path')
const {webpack, DefinePlugin} = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')

const PATH_SOURCE = path.join(__dirname, './src')
const PATH_PUBLIC = path.join(__dirname, './public')
const PATH_DIST = path.join(__dirname, './build')

module.exports = {
  mode: 'production',
  target: 'web',
  // webpack will take the files from ./src/index
  entry: [
    path.join(PATH_SOURCE, './index.tsx')
  ],

  // and output it into /dist as bundle.js
  output: {
    path: PATH_DIST,
    filename: '[name].[chunkhash].js',
    publicPath: './',
    chunkFilename: '[name].[chunkhash].js'
  },
  devtool: false,
  // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
  resolve: {
    modules: ['node_modules'],
    extensions: ['.wasm', '.ts', '.tsx', '.mjs', '.cjs', '.js', '.json', '.html']
  },
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader'
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[path][name].[ext]',
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[path][name].[ext]',
          mimetype: 'application/font-woff2'
        }
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          name: 'fonts/[path][name].[ext]',
          mimetype: 'font/opentype'
        }
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[path][name].[ext]',
          mimetype: 'application/octet-stream'
        }
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[path][name].[ext]',
        }
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[path][name].[ext]',
          mimetype: 'image/svg+xml'
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      },
      {
        test: /\.ico$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[path][name].[ext]'
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        // vendor chunk
        vendor: {
          minChunks: 2,
          // name of the chunk
          name: 'vendor',

          // async + async chunks
          chunks: 'all',

          // import file path containing node_modules
          test: /node_modules/,

          // priority
          priority: 20
        },

        // common chunk
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.join(PATH_PUBLIC, './favicon.ico'),
      template: path.join(PATH_PUBLIC, './index.html'),
      filename: 'index.html',
      inject: 'body',
      chunksSortMode: 'auto'
    }),
    new WebpackPwaManifest({
      name: 'Example',
      short_name: 'ex',
      display: 'standalone',
      theme_color: '#ffffff',
      description: 'desc',
      background_color: '#212121',
      crossorigin: null, //can be null, use-credentials or anonymous
      ios: {
        'apple-mobile-web-app-title': 'Example',
        'apple-mobile-web-app-status-bar-style': 'black'
      },
      icons: [
        {
          src: path.resolve('public/logo512.png'),
          size: '512x512' // you can also use the specifications pattern
        },
        {
          src: path.resolve('public/logo192.png'),
          size: '192x192',
          destination: path.join('icons', 'ios'),
          ios: true
        },
        {
          src: path.resolve('public/logo192.png'),
          size: '192x192',
          destination: path.join('icons', 'android')
        }
      ]
    }),
    new DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}