const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        })
    ],
    resolve: {
      root: [
        path.resolve('./src')
      ]
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
            ]
        }, {
            test: /\.scss$/,
            loaders: [
                'style?sourceMap',
                'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                'sass?sourceMap'
            ]
        }, {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: "babel",
            query: {
                cacheDirectory: true,
                "presets": ['react', 'es2015', 'stage-0', 'stage-1', 'stage-2', 'stage-3'],
                "env": {
                    "development": {
                        "presets": ["react-hmre"]
                    }
                }
            }
        }, {
            test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
            loader: "file"
        }]
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        inline: true,
        progress: true
    }
};
