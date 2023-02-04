const os = require("os");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const webpack = require("webpack");
const path = require("path"); // nodejs核心模块，用于处理路径
const TerserWebpackPlugin = require("terser-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const config = require("./config");
const threads = os.cpus().length;

module.exports = {
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "../dist"), //__dirname 当前文件的文件夹目录
    filename: "static/js/[name].[contenthash:6].js", // 入口文件打包输出的文件名
    chunkFilename: "static/js/[name].chunk.js", //打包输出的其他文件命名，如：动态导入的文件
    assetModuleFilename: "static/[hash:10][ext][query]", // 图片、字体等通过type: asset处理资源命名
    clean: true,
  },
  module: {
    rules: [
      // {
      // 每个文件只能被其中一个loader配置处理
      // oneOf: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader", // 将css 资源编译成 commonjs 的模块到js 中
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      // 其他选项
                    },
                  ],
                ],
              },
            },
          },
        ],
      }, //执行顺序从右至左
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          // "css-loader", // 将css 资源编译成 commonjs 的模块到js 中
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]],
              },
            },
          },
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
        test: /\.(js|tsx)$/,
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
              // presets: [
              //   "@babel/preset-env",
              //   "@babel/preset-react",
              //   "@babel/preset-typescript",
              // ],
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
    //   },
    // ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
          to: path.resolve(__dirname, "../dist"),
          globOptions: {
            // 忽略index 文件
            ignore: ["**/index.html"],
          },
        },
      ],
    }),
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
    }),
    // 压缩css
    new CssMinimizerPlugin(),
    // 压缩js
    new TerserWebpackPlugin({
      parallel: threads,
    }),
  ],
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: "all", // 所有模块都进行分割
      cacheGroups: {
        react: {
          test: /[\\/]node_modules[\\/]react(.*)[\\/]/,
          name: "chunk-react",
          priority: 40,
        },
      },
    },
  },
  ...config,
};
