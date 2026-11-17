import { defineConfig } from 'vite';

// The site is served from the custom domain https://marriedbydave.ca at the root.
// public/CNAME keeps that domain attached to GitHub Pages on every deploy.
export default defineConfig({
  base: '/',
});
