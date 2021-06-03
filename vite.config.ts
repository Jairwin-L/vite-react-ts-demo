import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacyPlugin from '@vitejs/plugin-legacy';
const path = require('path');
const resolvePath = dir => path.join(__dirname, dir);

export default defineConfig({
	plugins: [
		reactRefresh(),
		legacyPlugin({
			targets: [
				'Android > 39',
				'Chrome >= 60',
				'Safari >= 10.1',
				'iOS >= 10.3',
				'Firefox >= 54',
				'Edge >= 15',
			],
		}),
	],
	server: {
		host: 'dev.jairwin.cn',
		port: 7083,
	},
	css: {
		preprocessorOptions: {
			less: {
				modifyVars: {
					'@primary_btn': '#2598ff',
					'@detail_btn': '#2db7f5',
					'@edit_btn': '#8354ee',
					'@delete_btn': '#ff4d4f',
					'@white': '#fff',
					'@black': '#333',
					'@pink': '#ffc0cb',
					'@divideColor': '#f1f5ff',
					'@textColor': '#999',
					'@themeColor': '#3e71f8',
					'@gray': '#7a7a7a',
					'@defaultFontSize': '16px',
					'@commonFontSize': '14px',
					'@smallFontSize': '12px',
				},
				javascriptEnabled: true,
			},
		},
	},
	resolve: {
		// 自动解析确定的扩展，可以在引入模块时不带扩展
		extensions: ['.js', '.jsx', '.json', '.less', '.ts', '.tsx'],
		// 路径别名
		alias: {
			'@': resolvePath('src'),
			'@constant': resolvePath('src/constant'),
			'@components': resolvePath('src/components'),
			'@api': resolvePath('src/api'),
			'@utils': resolvePath('src/utils'),
			'@css': resolvePath('src/assets/css'),
			'@img': resolvePath('src/assets/img'),
		}
	},
})
