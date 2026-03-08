import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plugin to sync modulepreload href with built script path for production
function modulePreloadPlugin() {
  return {
    name: 'modulepreload-transform',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const scriptMatch = html.match(/<script[^>]+src="([^"]+)"[^>]*>/);
        if (scriptMatch) {
          const scriptSrc = scriptMatch[1];
          return html.replace(
            /<link rel="modulepreload" href="[^"]+"\s*\/?>/,
            `<link rel="modulepreload" href="${scriptSrc}" />`
          );
        }
        return html;
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), modulePreloadPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
