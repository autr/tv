<script>

	import { browser, dev } from '$app/env'
	import { base, assets } from '$app/paths';
	import PostControls from '$lib/PostControls.svelte'

	import { Media, utils } from 'ezekit'
	import { CENTROID, SCROLLER, EZE } from '$lib/_stores.js'

	export let id
	export let text
	export let media
	export let created
	export let updated
	export let original = ''
	export let index = -1
	export let embed
	export let date 
	export let status
	export let autohide = false
	export let format = '996x0x95xfit'
	export let orientation


	$: href = `/feed/${utils.year(date)}/${id}`

	$: media_ = media || [] 

	$: common = { 
		class: "post-media-inner flex grow w100pc feed-media-item rel"
	}

	$: em = (embed || [])[0]

	$: iframe = {
		mime: (embed || [])[0]?.iframe,
		url: (embed || [])[0]?.iframe,
		id: (embed || [])[0]?.id
	}


	$: root = `/posts/${utils.year(date)}/`


</script>
{#if embed.length != 0}
	<Media 
		bind:scroller={$SCROLLER}
		bind:centroid={$CENTROID}
		bind:eze={$EZE}
		{root}
		{format}
		file={iframe}
		bind:orientation={orientation}
		autohide={ autohide ? `${id}-media-embed` : null}/>
	<!-- <div class="space h4em" /> -->
{/if}
{#each media_ as file, idx} 
	<a {href} class="fill unclickable activ8 z-index22"></a>
	<Media 
		bind:scroller={$SCROLLER}
		bind:centroid={$CENTROID}
		bind:eze={$EZE}
		{root}
		{format}
		{file} 
		bind:orientation={orientation}
		autohide={ autohide ? `${id}-media-${idx}` : null} />
{/each}


<PostControls {...$$props} />
