import { defineConfig } from 'vite';

// GitHub Pages serves this project at https://thiuma.github.io/DaveBall-Weddings/
// so production assets need that base path. Local dev stays at "/".
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/DaveBall-Weddings/' : '/',
}));
