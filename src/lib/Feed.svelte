<script>
	import { page } from '$app/stores'
	import { onMount, onDestroy } from 'svelte'
	import RadCool from 'rad-and-cool-icons'
	import { ListView, utils} from 'ezekit'
	import { goto } from '$app/navigation'
	import { SCROLLER, CENTROID, DARKMODE } from '$lib/_stores.js'
	import PostItem from '$lib/PostItem.svelte'

	export let data

	const keys = ['id', 'created', 'updated', 'media', 'text', 'original', 'embed', 'date', 'status']

	let posts = []

	const ALL = 'all'

	function filter( year ) {
		posts = utils.posts( data, $page.params.year, ALL )
		const idx = parseInt( Math.random() * (posts.data.length - 1) )
		const item = posts.data[ idx ]
		random = `/feed/${utils.year(item?.date)}/${item?.id}`
	}

	$: filter( $page.params.year )

	let random

	const href = year => `/feed/${year == ALL ? '' : year}`


	let current = null
	let checked = {}
	function setChecked( years_, year_, current_ ) {
		if (year_ == '') year_ = ALL
		for (let i = 0; i < years_.length; i++) {
			const y = years_[i]
			const url = year_ == y
			checked[y] = current == y || ( url && current == null )
		}
	}

	$: setChecked( posts.years, $page?.params?.year || '', current )


	$: rando ={
		duration: 200,
		stroke: 2,
		width: 20,
		height: 20,
		color: 'var(--color)',
		type: 'randomise'
	}

	$: svg = {
		'stroke-width': 2,
		stroke: 'var(--color)',
		'vector-effect': 'non-scaling-stroke',
		fill: 'transparent'
	}

	function onClick( e, year ) {
		current = year
		try { goto( '/feed/' + year ) } catch(err) {}

	}

	const size = 45

	$: widthheight = `width:${size}px;height:${size}px;`
	$: rotate = `transform-origin: 50% 50%; transform: rotate(90deg);`

	$: showBackToTop = utils.browser ? $SCROLLER.itemsTop > window.innerHeight : false

	let gridMode = false
</script>


<svelte:head>
	<title>Autr | Gilbert Sinnott | Newsfeed {$page?.params?.year || (new Date()).getFullYear()} ({posts.data.length} images & videos)</title>
</svelte:head>

<!-- <button on:click={e => (gridMode = !gridMode)}>TOGGLE MDOE {gridMode}</button> -->

<nav id="feed-nav" class="flex  ptb0-5 row-stretch-center  bb  wrap">
	<div class="flex row wrap rel grow w100pc">
		{#each posts.years as year}
			<a 
				class="unclickable f0 flex row-center-center"
				on:click={ e => onClick( e, year ) }
				href={ href( year ) }>
				<label class="radio ptb0-5 activ8">
						<input 
							type="checkbox" 
							checked={ checked[year] } />
						<span />
						{year}
				</label>
			</a>
		{/each}
		<div class="align-self-flex-end grow flex row-flex-end-center">
			<a href={random} class="unclickable ptb0-5">random</a>
			<a href="/rss.xml" class="button unclickable ptb0-2 plr1 ml1">RSS</a>
		</div>
		<a href={random} class="block h2em w4em unclickable align-self-center flex row-start-center abs r0 b0-3 none" >
			<span class="p0-3"></span>
			<svg width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" >
			    <path {...svg} d="M85.41,0L100,15.494L85.092,31.325" />
			    <path {...svg} d="M84.282,66.253L100,82.945L83.939,100" />
			    <path {...svg} d="M0.395,68.675C2.851,61.718 6.12,55.183 10.079,49.198C5.927,42.989 2.521,36.179 -0,28.916"/>
			    <path {...svg} d="M100,82.538C92.722,84.784 85.027,85.989 77.07,85.989C49.431,85.989 24.964,71.456 10.079,49.198C24.938,26.739 49.52,12.048 77.309,12.048C85.179,12.048 92.792,13.227 100,15.426" />
			</svg>

		</a>
	</div>
</nav>

<div 
	class:none={!showBackToTop}
	class="sticky t0 l0 h0px w100vw row-flex-end-center z-index99 pointer">
	<a
		href="#top"
		class="border flex row-center-center rel t1 r0"
		style={widthheight + rotate + 'margin-top:1px'}>
		<RadCool
			type="arrow"
			color={ 'var(--color)'}
			misc={{rotate: 1}}
			stroke={1.5}
			width={size * 0.6}
			height={size * 0.6} />
	</a>
</div>

<slot />
<ListView
	bind:scroller={$SCROLLER}
	bind:centroid={$CENTROID}
	id="feed"
	class={`feed mt1 grow flex wrap ${!gridMode ? 'feed-list-mode' : 'feed-grid-mode' }`}
	{gridMode}
	data={ posts.data }
	{keys}
	component={PostItem}>


	<button 
		slot="more" 
		class="filled">more</button>
	<a href="#top" slot="top" class="button flex row-center-center sm-max-100 mb0">
		<RadCool
			type="arrow"
			style="transform-origin: 50% 50%; transform: rotate(90deg);"
			color={ 'var(--color)'}
			misc={{rotate: 1}}
			stroke={1.5}
			width={45 * 0.8}
			height={45 * 0.8} />
	</a>
</ListView>