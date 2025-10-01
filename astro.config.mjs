import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';


export default defineConfig({
  base: '/',
  integrations: [
    tailwind({
      configFile: './tailwind.config.js',
    }),
    mdx({
      syntaxHighlight: false,
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, {
          theme: 'github-dark',
          langs: ['bash', 'javascript', 'typescript', 'html', 'css', 'plaintext', 'text'],
          keepBackground: true,
        }],     
      ],
    }),
    sitemap(),
    ],
});
