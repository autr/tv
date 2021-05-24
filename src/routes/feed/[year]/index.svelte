<script context="module">
	import api from '$lib/api.js'
	export const load = async ({ fetch, page }) => {
		return { props: { data: await api.feed( fetch ) } }
	}
</script>


<script>
	import Feed from '$lib/Feed.svelte'
	export let data
</script>
<Feed {data} />