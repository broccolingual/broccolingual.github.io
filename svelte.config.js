import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const prism = require('prismjs')
require('prismjs/components/prism-markup');
require('prismjs/components/prism-clike')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-markup-templating');

require('prismjs/components/prism-python');
require('prismjs/components/prism-rust');
require('prismjs/components/prism-go');
require('prismjs/components/prism-haskell');
require('prismjs/components/prism-lua');
require('prismjs/components/prism-vim');
require('prismjs/components/prism-bash');
require('prismjs/components/prism-yaml');
require('prismjs/components/prism-json');
require('prismjs/components/prism-toml');
require('prismjs/components/prism-ini');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: mdsvex({
    extensions: ['.md'],
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    highlight: {
      highlighter: (code, lang) => {
        const grammar = prism.languages[lang] ?? prism.languages.plaintext
        const highlighted = prism.highlight(code, grammar, lang).replace(/\{/g, '&#123;').replace(/\}/g, '&#125;')
        return `<pre class="language-${lang}"><code>${highlighted}</code></pre>`
      }
    }
  }),
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	}
};

export default config;
