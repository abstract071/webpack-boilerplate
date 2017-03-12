const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');

const DevServerConfig = require('./configs/dev-server.config');

const PATHS = {
    app: path.join(__dirname, 'app'),
    dist: path.join(__dirname, 'dist')
};

const commonConfig = merge([
    {
        entry: {
            app: PATHS.app
        },
        output: {
            filename: '[name].[hash].js',
            path: PATHS.dist
        },
        module: {
            rules: [
                {
                    test: /\.(ttf|woff|woff2)$/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: './fonts/[name].[hash].[ext]'
                        }
                    }
                },
                {
                    test: /\.(png|jpg|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 25000,
                                name: './images/[name].[hash].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HtmlPlugin({
                title: 'Webpack 2 boilerplate',
                template: 'index.html'
            })
        ]
    }
]);

const developmentConfig = merge([
    {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        }
    },
    DevServerConfig({
        host: process.env.HOST,
        port: process.env.PORT
    })
]);

const productionConfig = merge([
    /*{
        entry: {
            vendors: [
                //'react'
            ]
        }
    },*/
    {
        devtool: "source-map"
    },
    {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        use: ["css-loader", "sass-loader"]
                    })
                }
            ]
        }
    },
    {
        plugins: [
            new CleanPlugin(PATHS.dist),
            new ExtractTextPlugin({
                filename: '[name].[contenthash].css'
            }),
            //new webpack.optimize.CommonsChunkPlugin({
            //    name: 'vendors'
            //}),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                minChunks: Infinity
            })
        ]
    }
]);

module.exports = (env) => {
    return env === 'production' ?
        merge(commonConfig, productionConfig) :
        merge(commonConfig, developmentConfig);
};