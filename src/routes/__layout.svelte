<script context="module">
	import api from '$lib/api.js'
	export const load = async ({ fetch, page }) => {
		console.log( '->', page.path )
		return { props: { data: await api.get( { info: '/info.json', pkg: '/pkg.json' }, fetch ) } }
	}
</script>


<script>

	import { browser, dev } from '$app/env'
	import { HeaderNeu, Footer, Header } from '$lib'
	import { EZE, DARKMODE, BURGERMODE, PKG, INFOS, AUTOPLAYING, SCROLLER } from '$lib/_stores.js'
	import { LayoutTopBar, ReDesign, utils } from 'ezekit'


	export let data

	INFOS.set({ ...data.info[0] })
	PKG.set({ ...data.pkg })
	AUTOPLAYING.set( true )
	EZE.set(  {
		api: 'http://localhost:3000/api/',
		editor: 'http://localhost:5000/',
		project: '/Users/gilbert/Code/tv/',
		assets: '/static',
		copy: dev || !browser
	})
	
	let el



</script>

<svelte:head>
	<meta name="author" content="Gilbert Sinnott">
	<meta name="description" content="Gilbert Sinnott">
	<meta name="theme-color" content="hsl( 200, 10%, 10% )" />
</svelte:head>

<main bind:this={el} class="sassis f1 w100vw h100vh" class:dark={$DARKMODE}>
	<LayoutTopBar bind:scroller={$SCROLLER} >
		<div id="top" slot="header" class="flex ">
			<Header />
		</div>
		<div slot="body" class="flex column-stretch-flex-start grow rel mlr1">
			<slot />
		</div>	
		<div slot="footer" class="">
			<Footer />
		</div>
	</LayoutTopBar>
</main>


<ReDesign {el} />