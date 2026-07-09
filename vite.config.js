import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import { minify } from 'html-minifier-terser';
import CleanCSS from 'clean-css';

function minifyHtmlPlugin() {
  return {
    name: 'minify-html-css-js',
    async closeBundle() {
      const distDir = resolve(__dirname, 'dist');
      const files = ['index.html', 'agent.html', 'plugin.html'];
      const cleanCss = new CleanCSS({ level: 2 });

      for (const file of files) {
        const filePath = resolve(distDir, file);
        if (fs.existsSync(filePath)) {
          let html = fs.readFileSync(filePath, 'utf-8');

          try {
            // Minify HTML, inline CSS, and inline JS
            const minifiedHtml = await minify(html, {
              removeAttributeQuotes: false,
              collapseWhitespace: true,
              removeComments: true,
              minifyCSS: (text) => cleanCss.minify(text).styles,
              minifyJS: true, // Minifies inline <script> blocks
            });

            fs.writeFileSync(filePath, minifiedHtml, 'utf-8');
            console.log(`✓ Minified HTML/CSS/JS for ${file}`);
          } catch (err) {
            console.error(`✗ Error minifying ${file}:`, err);
          }
        }
      }
    }
  };
}

export default defineConfig({
  plugins: [minifyHtmlPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        agent: resolve(__dirname, 'agent.html'),
        plugin: resolve(__dirname, 'plugin.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
