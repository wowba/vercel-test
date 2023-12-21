/// <reference types="vitest" />
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/dist/config.js';

const env = loadEnv('all', process.cwd());

export default defineConfig({
  plugins: [react()],
  // 개발용 프록시
  server: {
    proxy: {
      '/api': {
        target: env.VITE_BACKEND_ENDPOINT,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  // vitest
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    coverage: {
      exclude: [...configDefaults.coverage.exclude, '**/src/main.tsx'],
    },
  },
});
