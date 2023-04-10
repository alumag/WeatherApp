import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    plugins: [react(), tsconfigPaths(), eslint()],
    server: {
      proxy: {
        '/api': {
          target: 'https://api.weatherapi.com/v1',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '') + `&key=${env.VITE_CLIENT_KEY}`,
        },
      },
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  });
};
