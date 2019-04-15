const path = require( 'path' )
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
    new HtmlWebpackPlugin( {
      template: './index.html'
    } )
  ],
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.tsx?$/,
      //   use: [
      //     'tslint-loader'
      //   ]
      // },
      // {
      //   test: /\.tsx?$/,
      //   use: [
      //     'awesome-typescript-loader'
      //   ]
      // },
      {
        enforce: 'pre',
        test: /\.(js|ts|tsx)s$/,
        exclude: /node_modules/,
        use: [
          'eslint-loader',
          'source-map-loader'
        ]
      },
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/
      // },
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}

