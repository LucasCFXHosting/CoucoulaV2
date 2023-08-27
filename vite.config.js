import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react'
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vitejs.dev/config/
export default defineConfig({
  root,
  plugins: [reactRefresh()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        cloud: resolve(root, 'cloud','index.html'),
        home: resolve(root, 'home', 'index.html'),
        vps: resolve(root, 'vps', 'index.html'),
        dedicated: resolve(root, 'dedicated', 'index.html'),
        game: resolve(root, 'game', 'index.html'),
        transit: resolve(root, 'transit', 'index.html'),
        product: resolve(root, 'product', 'index.html'),
        about: resolve(root, 'about', 'index.html'),
      }
    }
  }
})