const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const WebpackPwaManifest = require('webpack-pwa-manifest')
const PATH_SOURCE = path.join(__dirname, './src')
const PATH_PUBLIC = path.join(__dirname, './public')
module.exports = {
    mode: 'development',
    target: 'web',
    // webpack will take the files from ./src/index
    entry: [
        path.join(PATH_SOURCE, './index.tsx')
    ],

    // and output it into /dist as bundle.js
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: "/"
    },
    devtool: "source-map",
    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json", ".html"]
    },
    stats: {
        // warnings: false // in dev only -> suppress warnings
    },
    watchOptions: {
        poll: true
    },
    module: {
        rules: [

            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
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
                test: /\.(a?png|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                }
            },
            {
                test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/,
                use: 'file-loader'
            },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },

    // development server configuration
    devServer: {
        hot: true,
        port: 3000,
        open: true,
        // must be `true` for SPAs
        historyApiFallback: true
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
        new HtmlWebpackPlugin({
            favicon: path.join(PATH_PUBLIC, './favicon.ico'),
            template: path.join(PATH_PUBLIC, './index.html')
        }),
        new BundleAnalyzerPlugin(),
        new WebpackPwaManifest({
            name: 'example',
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ]
};