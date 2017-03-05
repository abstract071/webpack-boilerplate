const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCSSPlugin = require("purifycss-webpack-plugin");
//import ExtractTextPlugin from "extract-text-webpack-plugin";

exports.minify = function() {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                beautify: false,
                comments: false,
                compress: {
                    warnings: false,
                    drop_console: true
                },
                mangle: {
                    except: ["$"],
                    screw_ie8: true,
                    keep_fnames: true
                }
            })
        ]
    };
};

exports.setFreeVariable = function(key, value) {
    const env = {};
    env[key] = JSON.stringify(value);

    return {
        plugins: [
            new webpack.DefinePlugin(env)
        ]
    };
};

exports.extractBundle = function(options) {
    const entry = {};
    entry[options.name] = options.entries;

    return {
        entry: entry,
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: [options.name, "manifest"]
            })
        ]
    };
};

exports.clean = function(path) {
    return {
        plugins: [
            new CleanWebpackPlugin([path], {
                root: process.cwd()
            })
        ]
    };
};

exports.extractCSS = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract("style", "css!sass"),
                    include: paths
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin("[name].[chunkhash].css")
        ]
    };
};

exports.purifyCSS = function(paths) {
    return {
        plugins: [
            new PurifyCSSPlugin({
                basePath: process.cwd(),
                paths: paths,
                purifyOtions: {
                    minify: true,
                    info: true
                }
            })
        ]
    };
};
