const paths = require('./paths')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const webpack = require('webpack')

// if no env.APP_ENV is specified in the cli
const defaultEnvironment =  'test'

module.exports = (env = defaultEnvironment) => ({
  // The first place Webpack looks to start building the bundle.
  entry: [paths.src + '/index.js'],
  // Where Webpack outputs the assets and bundles.
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [paths.src, 'node_modules'],
    alias: {
      'react-dom': `@hot-loader/react-dom`,
    },
  },
  // Customize the Webpack build process.
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding.
    new CleanWebpackPlugin(),
    // Copies files from target to destination folder.
    new CopyWebpackPlugin({
      patterns: [{
        from: paths.static,
        to: './',
      }],
    }),
    // Generates an HTML file from a template.
    new HtmlWebpackPlugin({
      title: 'C K Bedwell',
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
      custom: ``,
    }),
    // Dynamically loads the correct environment globals in index.js
    new webpack.NormalModuleReplacementPlugin(
      /(.*)APP_ENV/,
      resource => {
        resource.request = resource.request.replace(/APP_ENV/, env)
      }
    ),
    // Generate the sprite sheet
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
  ],
  // Determine how modules within the project are treated.
  module: {
    rules: [
      // Use Babel to transpile JavaScript files.
      {
        test: /\.js$/,
        include: paths.src,
        use: ['babel-loader'], //, TODO: add 'eslint-loader'?
      },
      {
        test: /\.svg$/,
        include: paths.src,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              runtimeCompat: true,
            },
          },
          'svgo-loader',
        ],
      },
      // Inline font files.
      // {
      //   test: /\.(woff(2)?|eot|ttf|otf|)$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 8192,
      //     name: '[path][name].[ext]',
      //     context: 'src', // prevent display of src/ in filename
      //   },
      // },
    ],
  },
})
