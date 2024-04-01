import { defineConfig } from 'wxt';
import Solid from 'vite-plugin-solid';
import Suid from "@suid/vite-plugin";

// See https://wxt.dev/api/config.html
export default defineConfig({
  vite: () => ({
    build: {
      target: 'esnext',
    },
    plugins: [Suid(), Solid()],
  }),
  manifest: {
    permissions: ['storage']
  }
});
