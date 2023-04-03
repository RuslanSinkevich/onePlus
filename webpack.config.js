const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
   entry: './src/js/index.js',
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
   },
   
   module: {
      rules: [{
        test: /\.(scss)$/,
        use: [
          // вставить CSS на страницу
          MiniCssExtractPlugin.loader
        , {
          // переводит CSS в модули CommonJS
          loader: 'css-loader'
        }, {
          // Выполнить действия postcss
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` требуется для postcss 8.x;
            // если Вы используете postcss 7.x пропустите ключ
            postcssOptions: {
              // плагины postcss, можно экспортировать в postcss.config.js
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          }
        }, {
          // компилирует Sass в CSS
          loader: 'sass-loader'
        }]
      }]
   },
   plugins: [
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
      new HTMLWebpackPlugin({
        template: "./src/index.html",
      }),
   ]
};