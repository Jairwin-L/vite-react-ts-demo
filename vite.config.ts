import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import VitePluginCdn from 'vite-plugin-cdn'
import legacyPlugin from '@vitejs/plugin-legacy';
const path = require('path');
const resolvePath = dir => path.join(__dirname, dir);

export default defineConfig({
	plugins: [reactRefresh(),
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
	VitePluginCdn({
		esm: true,
		modules: [
			{
				name: 'antd-mobile',
				css: 'https://lib.baomitu.com/antd-mobile/2.3.4/antd-mobile.min.css',
				url: 'https://lib.baomitu.com/antd-mobile/2.3.4/antd-mobile.min.js'
			}
		]
	})
		// styleImport({
		// 	libs: [
		// 		{
		// 			libraryName: 'antd',
		// 			esModule: true,
		// 			resolveStyle: (name) => {
		// 				return `antd/es/${name}/style/index`;
		// 			},
		// 		},
		// 	],
		// }),
	],
	build: {
		// target: 'esnext',
		// minify: 'terser',
		// manifest: false,
		// sourcemap: false,
		// outDir: 'build',
		rollupOptions: {
			external: ['antd-mobile'],
		}
	},
	esbuild: {},
	optimizeDeps: {},
	server: {
		port: 9090,
	},
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
			},
		},
	},
	// resolve: {
	// 	alias: [
	// 		{
	// 			find: /^~/,
	// 			replacement: path.resolve(__dirname, "src"),
	// 		},
	// 	],
	// },
	resolve: {
		// 自动解析确定的扩展，可以在引入模块时不带扩展
		extensions: ['.js', '.jsx', '.json', '.less', '.ts', '.tsx'],
	},
})
