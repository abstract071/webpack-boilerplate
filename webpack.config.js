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
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new HtmlPlugin({
            title: 'Webpack 2 boilerplate',
            template: 'index.html'
        }),
        new ExtractTextPlugin('main.css')
    ]
};











/*
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const validate = require("webpack-validator");
const devServer = require("./configs/dev-server.config");
const loaders = require("./configs/loaders.config");
const plugins = require("./configs/plugins.config");

const PATHS = {
    app: path.join(__dirname, "app"),
    style: [
        // For eliminating unused css
        //path.join(__dirname, "node_modules", "purecss | bootstrap | ..."),
        path.join(__dirname, "app", "main.scss")
    ],
    images: path.join(__dirname, "app/images"),
    fonts: path.join(__dirname, "app/fonts"),
    build: path.join(__dirname, "build")
};

// module.exports = {
const common = {
    entry: {
        app: PATHS.app,
        style: PATHS.style
    },
    output: {
        path: PATHS.build,
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Webpack demo",
            filename: "example.html"
        })
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "eslint-loader",
                include: PATHS.app
            }
        ]
    }
};

var config = null;

switch (process.env.npm_lifecycle_event) {
    case "build":
    case "stats":
        config = merge(
            common,
            {
                devtool: "source-map",
                output: {
                    path: PATHS.build,
                    filename: "[name].[chunkhash].js",
                    chunkFilename: "[chunkhash].js"
                }
            },
            plugins.clean(PATHS.build),
            plugins.setFreeVariable(
                "process.env.NODE_ENV",
                "production"
            ),
            loaders.setupHTML(PATHS.app),
            loaders.setupImages(PATHS.images),
            loaders.setupFonts(PATHS.fonts),
            plugins.extractCSS(PATHS.style),
            plugins.purifyCSS([PATHS.app]),
            loaders.setupBabel(),
            plugins.extractBundle({
                name: "vendor",
                entries: ["babel-polyfill"]
            }),
            plugins.minify()
        );
        break;
    default:
        config = merge(
            common,
            { devtool: "eval-source-map" },
            loaders.setupHTML(PATHS.app),
            loaders.setupCSS(PATHS.style),
            loaders.setupImages(PATHS.images),
            loaders.setupFonts(PATHS.fonts),
            loaders.setupBabel(),
            devServer.setupDevServer({
                host: process.env.HOST,
                port: process.env.PORT
            })
        );
}

module.exports = validate(config, {
    quiet: true
});*/




