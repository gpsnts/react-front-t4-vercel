
const HtmlWebPackPlugin = require("html-webpack-plugin"),
// 			Dotenv = require("dotenv-webpack"),
			path = require("path");

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
		watchContentBase: true,
    port: 8080,
  },

  entry: path.join(__dirname, "src", "index.tsx"),

  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx", ".json"],
  },

  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/,
				use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "public", "index.html"),
      filename: "./index.html",
    }),

		// new Dotenv({
		// 	path: path.join(__dirname, ".env"),
		// 	silent: true
		// })
  ],
};
