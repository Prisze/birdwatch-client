/** @type {import('vite').UserConfig} */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {BASE_URL} from './src/config'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: BASE_URL,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})