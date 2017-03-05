const webpack = require("webpack");

exports.setupCSS = function(paths) {
    return {
        module: {
            loaders: [
                //{
                //    test: /\.css$/,
                //    loaders: ["style", "css"],
                //    include: paths
                //},
                {
                    test: /\.scss$/,
                    loaders: ["style", "css?sourceMap", "sass?sourceMap"],
                    include: paths
                }
            ]
        }
    }
};

exports.setupHTML = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.(pug|jade)$/,
                    loaders: ["pug"],
                    include: paths
                }
            ]
        }
    }
};

exports.setupImages = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.(jpg|png)$/,
                    loader: "file?name=[path][name].[hash].[ext]!url?limit=25000",
                    include: paths
                }
                //{
                //    test: /\.(pug|jade)$/,
                //    loaders: ["pug"],
                //    include: paths
                //}
            ]
        }
    }
};

exports.setupFonts = function(paths) {
    return {
        module: {
            loaders: [
                {
                    test: /\.woff$/,
                    loader: "url",
                    query: {
                        name: "font/[hash].[ext]",
                        limit: 5000,
                        mimetype: "application/font-woff"
                    },
                    include: paths
                },
                {
                    test: /\.(ttf|eot)$/,
                    loader: "file",
                    query: {
                        name: "font/[hash].[ext]"
                    },
                    include: paths
                }
            ]
        }
    }
};

exports.setupBabel = function() {
    return {
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query: {
                        cacheDirectory: true
                    }
                }
            ]
        }
    }
};