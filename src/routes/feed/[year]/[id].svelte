<script context="module">
	import api from '$lib/api.js'
	export const load = async ({ fetch, page }) => {

		return { props: { data: await api.post( page.params, fetch ) } }
	}
</script>
<script>
	import { page } from '$app/stores'
	import { PostMedia, PostText } from '$lib'
	import { utils } from 'ezekit'
	export let data

	const size = 20
	$: icons = {
		width: size,
		height: size,
		stroke: 1,
		color: 'var(--color)'
	}

	let random = 'fdssd'

	$: post = data.post
	$: links = [ data.prev, data.random, data.next ]

	$: button = 'b1-solid flex row-center-center p1 grow'

</script>

<svelte:head>
	<title>Autr | Feed {$page?.params?.year || ''} | {post.text}</title>
</svelte:head>

<div id="feed-item" class="mt1 flex column-center-start sm-container">
	<div class="feed-item-media">
		<PostMedia {...post} autohide={true} />
	</div>
	<PostText {...post} />
	<nav id="feed-nav" class="mtb1 flex row-center-center sm-max-100">
		<div class="flex row rel cptb0-5 sm-max-100">

			{#each links as link,i}
				{#if i != 0}
					<span class="w1em" />
					<!-- <span class="h1em sm-min-none" /> -->
				{/if}
				<a 
					class="button plr1 grow" 
					href={`/feed/${utils.year(link.date)}/${link.id}`}>
					{link.hyperlink}
				</a>
			{/each}
		</div>
	</nav>
</div>