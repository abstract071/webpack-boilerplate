const webpack = require("webpack");

exports.setupDevServer = function(options) {
    return {
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            stats: "errors-only",
            host: options.host,
            port: options.port
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin({
                multiStep: true
            })
        ]
    }
};
