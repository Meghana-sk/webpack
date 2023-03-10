const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
//   entry: './src/index.js',
entry: path.resolve(__dirname, "src", "index.js"),

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  mode: "production",
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }, 
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"]

        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset"
        },
    ]
},
plugins: [
    new HtmlWebpackPlugin({
        title: "vanillaJS app",
        template: path.resolve(__dirname, "src", "index.html")
    })
],

};