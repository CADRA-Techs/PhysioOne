const { merge } = require("webpack-merge");
const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const APP_PUBLIC_PATH = process.env.REACT_APP_PUBLIC_PATH;
const deps = require("./package.json").dependencies;

const commonConfig = {
  entry: {
    remote: "./src/index.js",
  },
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    clean: true,
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "PhysioOne",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new ModuleFederationPlugin({
      shared: {
        jquery: { singleton: true },
      },
    }),
  ],
};

const developmentConfig = {
  mode: "development",
  devServer: {
    allowedHosts: ["all"],
    port: 3000,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
    webSocketServer: false,
  },
  devtool: "inline-source-map",
};

module.exports = (_, argv) => {
  switch (argv.mode) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return commonConfig;
    default:
      throw new Error("No matching configuration was found!");
  }
};
