const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    dist: path.join(__dirname, 'dist')
};

//const config = {
//    entry: {
//        app: PATHS.app
//        //vendors: ''
//    },
//    output: {
//        filename: '[name].js',
//        path: PATHS.dist
//    }
//};

module.exports = {
    entry: {
        app: PATHS.app
        //vendors: ''
    },
    output: {
        filename: '[name].js',
        path: PATHS.dist
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: './fonts/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [
                    //{
                    //    loader: 'file-loader',
                    //    options: {
                    //        name: './images/[hash].[ext]'
                    //    }
                    //},
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 25000,
                            name: './images/[hash].[ext]'
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
        }),
        new ExtractTextPlugin({
            filename: '[name].css'
        })
    ]
};







