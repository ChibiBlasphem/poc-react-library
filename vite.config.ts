import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'ToucanComponentLib',
      formats: ['es', 'cjs'],
      fileName: (format) => `toucan-component-lib.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'styled-components'],
    },
  },
  plugins: [react() as any],
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
