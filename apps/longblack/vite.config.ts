import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import { installGlobals } from '@remix-run/node';
import { vitePlugin as remix } from '@remix-run/dev';

installGlobals();

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
});
