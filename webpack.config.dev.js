const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
	mode: 'development', //sets env to dev
	target: 'web', // web vs node, writes files differently
	devtool: 'cheap-module-source-map', //dunno what cheap module means but I think it's a light source map for debug
	entry: './src/index', //default entry point
	output: {
		path: path.resolve(__dirname, 'build'), //in dev mode app actually loaded from memory so no file is written
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		stats: 'minimal', //could use express instead of this. minimal logging
		overlay: true,
		historyApiFallback: true,
		disableHostCheck: true, //this stuff is to fix a bug in chrome, shouldn't be necessary forever
		headers: { 'Access-Control-Allow-Origin': '*' },
		https: false,
	},
	plugins: [
		new HtmlWebpackPlugin({
			//makes generating html files easier somehow
			template: 'src/index.html',
			favicon: 'src/favicon.ico',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, //not testing, means test for these file extensions before using them
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'], //run babel loader on the files it finds through regex
			},
			{
				test: /(\.css)$/,
				use: ['style-loader', 'css-loader'], //
			},
		],
	},
};
