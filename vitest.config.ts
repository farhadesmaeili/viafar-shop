import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
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
