const path = require( 'path' )
const webpack = require( 'webpack' )
const merge = require( 'webpack-merge' )
const CleanWebpackPlugin = require( 'clean-webpack-plugin' )
const UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' )

const common = require( './webpack.common.config' )


module.exports = merge( common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve( __dirname, 'dist' )
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 75
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin( ['dist'] ),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin( {
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    } ),
    new MiniCssExtractPlugin( {
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    } )
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin( {
        sourceMap: true
      } ),
      new OptimizeCSSAssetsPlugin( {} )
    ]
  }
} )
