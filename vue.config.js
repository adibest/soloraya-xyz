module.exports = {
	pages: {
		// 'index': {
		// 	entry: './src/site/main.js',
		// 	template: 'public/index.html',
		// 	title: 'Learneed | Learn What You Need',
		// 	chunks: ['chunk-vendors', 'chunk-common', 'index']
		// },
		'admin': {
			entry: './src/admin/main.js',
			template: 'public/admin.html',
			title: 'Learneed Admin Page',
			chunks: ['chunk-vendors', 'chunk-common', 'admin']
		},
	},
	devServer: {
		historyApiFallback: {
			rewrites: [
				// { from: /\/index/, to: '/index.html' },
				{ from: /\/admin/, to: '/admin.html' }
			]
		},
		watchOptions: {
			poll: true
		}
	}
}
