const path = require("path");

module.exports = () => {
  var config = {
    context: path.resolve("src"),
    entry: "./index.js",
    output: {
      path: path.resolve("dist"),
      filename: 'bundle.js'
    },
    module: {
			rules: [
				{
					test: /\.css$/,
					use: ["style-loader", "css-loader"]
				},
				{
					test: /\.jsx?$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: "babel-loader"
					}
				}
			]
		}
  };

  return config;
};
