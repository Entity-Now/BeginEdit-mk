import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import fs from 'node:fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    outDir:"DemoDist"
  }
});
