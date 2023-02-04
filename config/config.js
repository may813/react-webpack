module.exports = {
  entry: { index: "./src/index.js" },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".json"],
  },
  externals: {
    React: "React",
  },
};
