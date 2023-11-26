import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
  ],

  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      { find: '@store', replacement: path.resolve(__dirname, './src/store') },
      { find: '@svg', replacement: path.resolve(__dirname, './src/svg') },
      { find: '@three', replacement: path.resolve(__dirname, './src/three') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks') },
      { find: '@functions', replacement: path.resolve(__dirname, './src/functions') },
      { find: '@stores', replacement: path.resolve(__dirname, './src/stores') },
      { find: '@assets', replacement: path.resolve(__dirname, './public/assets') },
    ]
  }

})
