const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path')

module.exports = {
    entry: "./src/App.tsx",
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: './dist'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
      },
      module: {
        rules: [
          { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }
        ]
      },
      resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
        modules: [
          path.resolve('src'),
          path.resolve('node_modules'),
        ]
      },
      
      plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
      ]
}