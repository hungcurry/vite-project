import { fileURLToPath, URL } from 'node:url'
import path from "path";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 自動引入 套件API
import AutoImport from "unplugin-auto-import/vite";
// 自動引入 component
import Components from "unplugin-vue-components/vite";
// 自動引入 svg
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
// 自動引入 router
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      "@assets": `${path.resolve(__dirname, 'src/assets')}/`,
      "@components": `${path.resolve(__dirname, 'src/components')}/`,
      "@images": `${path.resolve(__dirname, 'src/assets/images')}/`,
      "@style": `${path.resolve(__dirname, 'src/assets/style')}/`,
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/all";'
      }
    },
    devSourcemap : true,
  },
  sever:{
    https : false ,
    cors: true, // 允許跨域
    open: '/', // 瀏覽器自動開啟
    port:8080, //專案啟動時自定義埠
    hmr : true // hot reload
  },
  build: {
    target: 'es2015', /*  */
    // 移除console
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    brotliSize: false, /* 壓縮大型輸出文件可能會很慢，因此禁用該功能可能會提高大型項目的構建性能 */
    outDir: 'dist', /* 指定輸出路徑 */
    cssCodeSplit: false, /* 整個項目中的所有 CSS 變一個 CSS 文件中 */
    chunkSizeWarningLimit: 1500, /* chunk 大小警告的限制（以 kbs 為單位） */
    sourcemap: false, /* source map 文件 */
    manifest: true, /*  */
    assetsDir: 'static/img/', /* 靜態資源的存放路徑 */
    emptyOutDir: true, /* 默認情況下，若 outDir 在 root 目錄下，則 Vite 會在建構時清空該目錄 */
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name].[hash].js',
        entryFileNames: 'static/js/[name].[hash].js',
        assetFileNames: 'static/[ext]/[name].[hash].[ext]',
      },
    }
  },
  plugins: [
    vue(),
    AutoImport({
      // 需要自動引入的 請寫在陣列
      imports: ["vue", "vue-router", "vue-i18n" , "pinia"],
      dts: "src/auto-imports.js",
    }),
    Components({
      // 從 `./src/components/` 路徑查找
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/auto-components.js",
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "src/assets/svg")],
      symbolId: "[dir]/[name]",
    }),
    Pages(),
    Layouts(),
  ],
})
