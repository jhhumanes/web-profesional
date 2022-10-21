import { resolve } from 'path'

export default {
  root: resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        // blog: resolve(__dirname, 'src/blog.html'),
      }
    }
  },
  base: '/web-profesional/',
}
