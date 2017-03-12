var webpack=require("webpack");
var path=require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

module.exports={
	entry: "./js/entry.js",
	output: {
		path: path.resolve(__dirname,'build'),
		filename: "react.bundle.js"
	},

	module: {
		loaders: [
			{
				test: /\.css$/, 
				loader: ExtractTextPlugin.extract({fallbackLoader: "style-loader", loader: [{loader: "css-loader"},{loader: "postcss-loader"}]})
			},
			{ 
    			test: /\.jsx?$/,
    			exclude: /node_modules/, 
    			loader: "babel-loader", 
    			query:
      				{
        				presets:['react']
      				}
			}
		]
	},
 	
	plugins: [
		new ExtractTextPlugin("style.css"),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [
    				autoprefixer()
  				],
			}
		})
	],

};