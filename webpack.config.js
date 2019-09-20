const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
require("babel-polyfill");
const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    historyApiFallback: true,
    port: 8081,
    disableHostCheck: true
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({ exclude: /node_modules/, sourceMap: true })
    ]
  },

  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "./public/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "main.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: [
          { loader: prod ? MiniCssExtractPlugin.loader : "style-loader" },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: [require("tailwindcss"), require("autoprefixer")]
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  }
};
