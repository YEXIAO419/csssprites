// 配置webpack
const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
		// 配置规则和编译器
	configureWebpack: config => {
		module: {
			rules: [
				{
					test: /png$/,
					loader: [
						'file-loader?name=i/[hash].[ext]'
					]
				},
				{
					test: /\.(css|scss)$/,
					use: ExtractTextPlugin.extract({
						fallback:'style-loader',
						use: ['css-loader', 'postcss-loader', 'sass-loader']
					})
				}
			]
		}
	},

		// 路径配置
	 configureWebpack: {
		resolve: {
			modules: [
				'node_modules',
				'assets/sprite' // css在哪里能找到sprite图
			]
		},
	 },

		// 插件
	 configureWebpack: {
		plugins: [
			new SpritesmithPlugin({
				src: {
					cwd: path.resolve(__dirname, 'src/assets/ico'), // 原图片
					glob: '*.png' //哪种类型的图片
				},
				target: {
					image: path.resolve(__dirname, 'src/assets/sprite/sprites.png'),  // sprite图片保存路径
	                css: path.resolve(__dirname, 'src/assets/sprite/_sprites.scss')  // 生成的sass保存在哪里
				},
				apiOptions: {
					cssImageRef: './../sprite/sprites.png' // css(index.scss下面)根据该指引找到sprite图
				}
			})
		]
	 }
}