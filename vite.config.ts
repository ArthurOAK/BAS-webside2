import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint2'
import * as path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { compression } from 'vite-plugin-compression2'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return {
    optimizeDeps: {
      include: [],
    },
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg', '**/*.webp'],
    build: {
      commonjsOptions: {
        exclude: [],
        include: [/node_modules/],
      },
    },
    base: '/',
    plugins: [react(), eslint(), tsconfigPaths(), compression()],
    resolve: {
      alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }],
    },
    server: {
      port: 3000,
    },
    preview: {
      host: '0.0.0.0',
      port: 8000,
    },
  }
})
