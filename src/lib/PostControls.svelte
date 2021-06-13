<script>
	import { AUTOPLAYING, MUTED, CENTROID } from '$lib/_stores.js'
	import RadCool from 'rad-and-cool-icons'
	
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

	$: video = (media || []).find( m => m.item.mime.indexOf('video') != -1) ? true : false

	$: icons = {
		width: 35,
		height: 35,
		stroke: 1,
		color: 'var(--color)'
	}

	$: playing = $CENTROID?.id && id ? $CENTROID.id.indexOf(id) != -1 : false
</script>
<nav class="m1 flex row-center-center">
	{#if video}
		<span on:click={e => $AUTOPLAYING = !$AUTOPLAYING}>
			<RadCool 
				type="play-pause"
				state={ $AUTOPLAYING }
				{...icons}
				width={icons.width - 12}
				height={icons.height - 12}
				 />
		</span>
		<span class="w1em" />
		<span on:click={e => $MUTED = !$MUTED}>
			<RadCool 
				state={ $MUTED  }
				type="audio"
				{...icons} />
		</span>
	{/if}
</nav>