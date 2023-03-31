const HTMLWebpackPlugin = require("html-webpack-plugin");

const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   entry: './src/js/index.js',
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist')
   },
   
   module: {
      rules: [{
         test: /\.s[ac]ss$/i,
         use: [
           // Creates `style` nodes from JS strings
           "style-loader",
           // Translates CSS into CommonJS
           "css-loader",
           {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('autoprefixer')
                ]
              }
            }
          },
           // Compiles Sass to CSS
           "sass-loader",
         ],
       }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
      new HTMLWebpackPlugin({
        template: "./src/index.html",
      }),
   ]
};