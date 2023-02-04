const os = require("os");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");
const path = require("path"); // nodejs核心模块，用于处理路径
const TerserWebpackPlugin = require("terser-webpack-plugin");
const config = require("./config");
const threads = os.cpus().length;

module.exports = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  module: {
    rules: [
      // {
      // 每个文件只能被其中一个loader配置处理
      {
        test: /\.less$/,
        use: [
          "style-loader", // 将 js 中 css 通过创建 style 标签添加到文件中
          "css-loader", // 将css 资源编译成 commonjs 的模块到js 中
          // "less-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                modifyVars: {
                  "primary-color": "#ff3818",
                  "link-color": "#1DA57A",
                  "border-radius-base": "2px",
                },
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(js|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "thread-loader", // 开启多进程
            options: {
              works: threads, // 进程数量
            },
          },
          {
            loader: "babel-loader",
            options: {
              //   presets: [
              //     "@babel/preset-env",
              //     {
              //       useBuiltIns: "usage", // 按需加载自动引入
              //       corejs: 3,
              //     }, // 编译ES6语法
              //     "@babel/preset-react",
              //     "@babel/preset-typescript",
              //   ],
              cacheDirectory: true, // 开启babel 缓存
              cacheCompression: false, // 关闭缓存文件压缩
              // plugins: ["@babel/plugin-transform-runtime"], // 减少代码体积
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
        type: "asset", // 会转换文件
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10KB 的图片转为base64，优点：减少请求数量 缺点：体积会更大
          },
        },
        // generator: {
        //   filename: "static/images/[hash:10][ext][query]",
        // },
      },
      {
        test: /\.(ttf|woff|woff2)$/,
        type: "asset/resource", // 不转换文件，
        // generator: {
        //   filename: "static/fonts/[hash:10][ext][query]",
        // },
      },
    ],
    // },
    // ],
  },
  devServer: {
    client: {
      progress: true,
    },
    port: "3000",
    hot: true, // 默认开启
    compress: true,
    open: true,
    historyApiFallback: true,
    proxy: {
      //   '*': {
      //     target: 'http://localhost:91',
      //     pathRewrite: { '^/api': '' },
      //   },
      "/": {
        target: "http://localhost:3000",
        secure: false,
        bypass: function (req, res, proxyOptions) {
          if (req.headers.accept.indexOf("html") !== -1) {
            console.log("Skipping proxy for browser request.");
            return "/index.html";
          }
        },
      },
    },
  },
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM",
  // },
  // resolve: {
  //   alias: {
  //     react: path.resolve(__dirname, "src/public/js/react.development.js"),
  //     "react-dom": path.resolve(
  //       __dirname,
  //       "src/public/js/react-dom.development.js"
  //     ),
  //   },
  // },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new MiniCssExtractPlugin({
      filename: "static/css/[name].[contenthash:6].css",
    }),
    new ESLintPlugin({
      context: path.resolve(__dirname, "../src"),
      // extensions: ["js", "tsx", "ts"],
      exclude: "node_modules",
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/eslintcache"
      ),
      // threads, // 开启多进程和进程数量
    }),
    // 压缩css
    // new CssMinimizerPlugin(),
    // 压缩js
    // new TerserWebpackPlugin({
    //   parallel: threads,
    // }),
  ],
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: "all", // 所有模块都进行分割
      // cacheGroups: {
      //   react: {
      //     test: /[\\/]node_modules[\\/]react(.*)[\\/]/,
      //     name: "chunk-react",
      //     priority: 40,
      //   },
      // },
    },
    // runtimeChunk: {
    //   // 运行时代码要单独分割
    //   name: (entrypiont) => `runtime-${entrypiont.name}.js`,
    // },
  },
  ...config,
};
