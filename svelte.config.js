import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'


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
	},
	preprocess: preprocess({
		replace: [
			['process.env.EZE_API_ROOT', JSON.stringify(process.env.EZE_API_ROOT)],
			['process.env.EZE_APP_ROOT', JSON.stringify(process.env.EZE_APP_ROOT)],
			['process.env.PROJECT_ROOT', JSON.stringify(process.env.PROJECT_ROOT)],
			['process.env.PROJECT_ASSETS', JSON.stringify(process.env.PROJECT_ASSETS)]
		]
	})
}

export default config