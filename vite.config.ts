import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacyPlugin from "@vitejs/plugin-legacy";
import AutoImport from "unplugin-auto-import/vite";
// import { viteExternalsPlugin } from "vite-plugin-externals";
// import externalGlobals from "rollup-plugin-external-globals";
import viteCompression from "vite-plugin-compression";
import path = require("path");
const resolvePath = (dir) => path.join(__dirname, dir);

export default defineConfig({
  plugins: [
    viteCompression(),
    react(),
    legacyPlugin({
      targets: [
        "Android > 39",
        "Chrome >= 60",
        "Safari >= 10.1",
        "iOS >= 10.3",
        "Firefox >= 54",
        "Edge >= 15",
      ],
    }),
    AutoImport({
      imports: ["react", "react-router-dom"],
      dts: true, // 生成 TypeScript 声明
    }),
    // viteExternalsPlugin({
    // 	React: "react",
    // 	ReactDom: "react-dom",
    // 	// antd: "antd",
    // }),
  ],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  esbuild: {},
  optimizeDeps: {},
  server: {
    port: 7088,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          "@primary_color": "#1890ff",
          "@detail_color": "#2db7f5",
          "@edit_color": "#8354ee",
          "@danger_color": "#ec4e3d",
          "@white": "#fff",
          "@theme_black": "#333",
          "@pink": "#ffc0cb",
          "@divideColor": "#f1f5ff",
          "@textColor": "#999",
          "@themeColor": "#3e71f8",
          "@gray_color": "#c4c4c4",
          "@defaultFontSize": "16px",
          "@commonFontSize": "14px",
          "@smallFontSize": "12px",
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    // 自动解析确定的扩展，可以在引入模块时不带扩展
    extensions: [".js", ".jsx", ".json", ".less", ".ts", ".tsx", ".mjs"],
    // 路径别名
    alias: {
      "@": resolvePath("src"),
      "@pages": resolvePath("src/pages"),
      "@constant": resolvePath("src/constant"),
      "@/enum": resolvePath("src/enum"),
      "@components": resolvePath("src/components"),
      "@helper": resolvePath("src/helper"),
      "@api": resolvePath("src/api"),
      "@utils": resolvePath("src/utils"),
      "@css": resolvePath("src/assets/css"),
      "@img": resolvePath("src/assets/img"),
    },
  },
});
