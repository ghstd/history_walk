const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
	entry: path.join(__dirname, 'src', 'index.js'),
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'main.js',
		// filename: 'main[contenthash:7].js',
		// publicPath: '/',
		assetModuleFilename: 'images/[hash][ext][query]'
	},
	devServer: {
		watchFiles: path.join(__dirname, 'src'),
		port: 3000,
		historyApiFallback: true,
		// static: {
		// 	directory: path.join(__dirname, "/"),
		// }
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.module\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: '[local]__[sha1:hash:hex:7]'
							}
						}
					}
				]
			},
			{
				test: /^((?!\.module).)*(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				]
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.join(__dirname, 'src', 'index.html'),
			filename: 'index.html',
			inject: false,
			minify: false
		}),
		new FileManagerPlugin({
			events: {
				onStart: {
					copy: [
						{ source: './src/assets/favicon/', destination: './dist/favicon' }
					]
				}
			}
		}),
		new MiniCssExtractPlugin({
			filename: 'main.css',
			// filename: '[name].[contenthash].css',
		})
	]
};

module.exports = (env, options) => {
	config.devtool = options.mode === 'development'
		? 'eval-source-map'
		: false

	return config
}
