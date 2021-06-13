<script>

	import { dev } from '$app/env'
	import { ListSignup } from 'ezelte'

	const DEBUG = false
	
	const config = {
		root: dev && DEBUG ? 'http://localhost:8000' : 'https://ezipe.glitch.me',
		user: 'autr',
		interests: 'artworks:news,code:open source,personal:miscelleny',
		init: 'vars=artworks,code,personal'
	}

</script>

<ListSignup {...config} class="flex column cmb1 sm-max-100 minw18em" />

<!-- <iframe src="https://api.autr.tv" class="w100vw h30em"></iframe> -->