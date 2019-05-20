const path = require( 'path' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )


module.exports = {
  entry: {
    app: './src/index.tsx'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ],
    modules: [
      path.resolve( __dirname, 'static' ),
      path.resolve( __dirname, 'src' ),
      'node_modules'
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin( {
      title: 'Webpack Boilerplate',
      template: './index.html'
    } )
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|ts|tsx)s$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
          'source-map-loader'
        ]
      },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
}

