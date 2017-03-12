const webpack = require("webpack");

module.exports = ({ host, port } = {}) => {
    return {
        devServer: {
            historyApiFallback: true,
            hotOnly: true,
            stats: 'errors-only',
            host,
            port,
            overlay: {
                errors: true,
                warnings: true
            }
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        ]
    }
};
