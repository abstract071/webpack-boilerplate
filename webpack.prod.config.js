const path = require( 'path' )
const webpack = require( 'webpack' )
const merge = require( 'webpack-merge' )
const cssnano = require( 'cssnano' )
const GitRevisionPlugin = require( 'git-revision-webpack-plugin' )
const TerserPlugin = require( 'terser-webpack-plugin' )
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

const common = require( './webpack.common.config' )


module.exports = merge( common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    chunkFilename: '[name].[chunkhash].js',
    filename: '[name].[chunkhash].js',
    path: path.resolve( __dirname, 'dist' )
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]__[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin( {
      banner: new GitRevisionPlugin().version()
    } ),
    new webpack.HashedModuleIdsPlugin(),
    new OptimizeCSSAssetsPlugin( {
      cssProcessor: cssnano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        },
        safe: true
      },
      canPrint: false
    } ),
    new MiniCssExtractPlugin( {
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[hash].css'
    } )
  ],
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
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
      new TerserPlugin( {
        sourceMap: true
      } )
    ]
  }
} )
