import path from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  test: {
    globals: true,

    environment: 'node',

    setupFiles: ['./src/tests/setup.ts'],

    include: ['src/**/*.spec.ts', 'src/**/*.test.ts'],

    passWithNoTests: true,

    coverage: {
      provider: 'v8',

      reporter: ['text', 'html'],

      reportsDirectory: './coverage',
    },
  },
});
