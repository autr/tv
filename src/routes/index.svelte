<script context="module">
	import api from '$lib/api.js'
	export const load = async ({ fetch, page }) => {
		return { props: { data: await api.feed( fetch ) } }
	}
</script>

<script>
	import { Feed } from '$lib'
	export let data
</script>

<svelte:head>
	<title>Gilbert Sinnott | Artist & Designer</title>
</svelte:head>

<Feed {data} />
