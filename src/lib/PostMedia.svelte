<script>

	import { browser, dev } from '$app/env'
	import { base, assets } from '$app/paths';
	import RadCool from 'rad-and-cool-icons'

	import { Media, utils } from 'ezekit'
	import { CENTROID, SCROLLER, EZE, AUTOPLAYING, MUTED } from '$lib/_stores.js'

	let class_ = ""
	export { class_ as class }
	let style_ = ""
	export { style_ as style }

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

	$: href = `/feed/${utils.year(date)}/${id}`
	$: root = `/posts/${utils.year(date)}/`
	$: ICON_CONF = {
		width: 35,
		height: 35,
		stroke: 2,
		color: 'var(--color)'
	}
	$: IS_VIDEO = (media || []).find( m => {
		console.log(m)
		return m.mime.indexOf('video') != -1
	}) ? true : false

	let medias = {}
	let timeouts = {}
	let playing = {}

	function onPlay( file, idx ) {
		console.log(`[PostMedia] playing ${file.id}`)
		playing[idx] = true
	}
	function onPause( file, idx ) {
		playing[idx] = false
		console.log(`[PostMedia] paused ${file.id}`)
	}

</script>

{#each media || [] as file, idx} 
	<a 
		{href}
		class={class_} 
		style={style_}>
		<Media 
			bind:scroller={$SCROLLER}
			bind:centroid={$CENTROID}
			bind:eze={$EZE}
			bind:muted={$MUTED}
			bind:playing={$AUTOPLAYING}
			bind:this={ medias[idx] }
			on:onplay={ e => onPlay(file, idx) }
			on:onpause={ e => onPause(file, idx) }
			{root}
			{format}
			{file} 
			autohide={ autohide ? `${id}-media-${idx}` : null} />

		{#if IS_VIDEO}
			<nav 
				class:playing={playing[idx]}
				class="post-controls fill">
				<span 
					class="fill z-index66 flex row-center-center">
					<span class="fill" on:click={ e => ($AUTOPLAYING = !$AUTOPLAYING) } />
					<RadCool 
						type="play-pause"
						bind:state={ $AUTOPLAYING }
						{...ICON_CONF}
						 />
				</span>
				<span class="block abs r1 b1 z-index66 cursor">
					<RadCool 
						bind:state={ $MUTED  }
						type="audio"
						{...ICON_CONF} />
					<RadCool 
						on:click={ e => { $MUTED = false; medias[idx].goFullscreen() } }
						type="fullscreen"
						class="mb0-2 ml1 mr0-6"
						{...ICON_CONF}
						width={ICON_CONF.width * 0.8}
						height={ICON_CONF.height * 0.8} />
				</span>
			</nav>
		{/if}
	</a>


{/each}


