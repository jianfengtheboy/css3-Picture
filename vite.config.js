/*
 * @Author: Sun
 * @LastEditors: Sun
 * @Email: jianfengtheboy@163.com
 * @Date: 2021-04-13 09:56:44
 * @LastEditTime: 2021-04-13 13:07:07
 * @Description: vite配置
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

function pathResolve(dir) {
  return resolve(__dirname, '.', dir);
}

export default defineConfig({
  plugins: [vue()],
  base: '',
  outDir: 'dist',
  assetsDir: '',
  port: 3000,
  open: true,
  https: false,
  ssr: false,
  resolve: {
    alias: {
      '@': pathResolve('src')
    }
  },
  optimizeDeps: {
    include: []
  },
  proxy: {}
})
