import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
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
require('prismjs/components/prism-bash');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: mdsvex({ 
    extensions: ['.md'],
    highlight: {
      highlighter: (code, lang) => {
        const grammar = prism.languages[lang] ?? prism.languages.plaintext
        return `<pre class="language-${lang}"><code>${prism.highlight(code, grammar, lang)}</code></pre>`
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
