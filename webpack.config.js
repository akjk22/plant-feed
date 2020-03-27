const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/meal-service.js', 
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new UglifyJsPlugin({ sourceMap: true }),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Meal API',
			template: './src/index.html',
			inject: 'head'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		}),
		new Dotenv()
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			},
			{
				test: /\.js$/,
				exclude: /node_module/,
				loader: 'eslint-loader'
			},
			{
				test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
			}
		]
	}
};
