const paths = require('./paths');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: {
    index: paths.src + '/index.js',
    about: paths.pages + '/about.js',
    article: paths.pages + '/article.js',
    blog: paths.pages + '/blog.js',
    contacts: paths.pages + '/contacts.js',
    work: paths.pages + '/work.js',
    errorPage: paths.pages + '/error-page.js',
  },

  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),

    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
        },
      ],
    }),

    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      favicon: paths.public + '/favicon.svg',
      chunks: ['index'],
      template: paths.src + '/index.html', // template file
      filename: 'index.html', // output file
    }),
    new HtmlWebpackPlugin({
      favicon: paths.public + '/favicon.svg',
      chunks: ['about'],
      template: paths.pages + '/about.html',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      favicon: paths.public + '/favicon.svg',
      chunks: ['article'],
      template: paths.pages + '/article.html',
      filename: 'article.html',
    }),
    new HtmlWebpackPlugin({
      favicon: paths.public + '/favicon.svg',
      chunks: ['blog'],
      template: paths.pages + '/blog.html',
      filename: 'blog.html',
    }),
    new HtmlWebpackPlugin({
      favicon: paths.public + '/favicon.svg',
      chunks: ['contacts'],
      template: paths.pages + '/contacts.html',
      filename: 'contacts.html',
    }),
    new HtmlWebpackPlugin({
      favicon: paths.public + '/favicon.svg',
      chunks: ['work'],
      template: paths.pages + '/work.html',
      filename: 'work.html',
    }),
    new HtmlWebpackPlugin({
      favicon: paths.public + '/favicon.svg',
      chunks: ['errorPage'],
      template: paths.pages + '/error-page.html',
      filename: 'error-page.html',
    }),
  ],

  // Determine how modules within the project are treated
  module: {
    rules: [
      { test: /\.html$/, loader: 'html-loader' },
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },

      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { url: true, sourceMap: true, importLoaders: 1 },
          },
          { loader: 'resolve-url-loader' },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      // Images: Copy image files to build folder
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
};
