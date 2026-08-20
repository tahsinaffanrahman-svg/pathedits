import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 4321
  },
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    server: {
      allowedHosts: true,
      cors: true
    }
  }
});
