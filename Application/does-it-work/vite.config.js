import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mime from 'mime-types'

export default defineConfig({
  plugins: [react()],
  server: {
    middleware: (req, res, next) => {
      const mimeType = mime.lookup(req.url)
      if (mimeType) {
        res.setHeader('Content-Type', mimeType)
      }
      next()
    },
  },
})
