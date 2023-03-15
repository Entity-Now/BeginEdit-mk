import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import fs from 'node:fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    lib:{
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'beginedit-mk',
      fileName:"BeginEdit-mk"
    },
    // 不加修饰，这样你就可以看到其中到底包含了什么
    minify: false,
    rollupOptions:{
      external:['vue'],
      output:{
        globals:{
          vue:'Vue'
        }
      }
    }
  }
})
