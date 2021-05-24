import adapter from '@sveltejs/adapter-static'


/** @type {import('@sveltejs/kit').Config} */

const NOROUTER = false

const config = {
	kit: {
		adapter: adapter(),
		target: '#svelte',
		appDir: 'app',
		ssr: true,
		files: {
			assets: 'static'
		},
		prerender: {
			crawl: true
		},
		router: process.env.NODE_ENV == 'development' && NOROUTER ? false : true
	}
}

export default config