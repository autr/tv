<script context="module">
	import api from '$lib/api.js'
	export const load = async ({ fetch, page }) => {
		return { props: { data: await api.get( { about: '/about.json' }, fetch ) } }
	}
</script>

<script>
	import Color from 'color'
	import { Title, Mail } from '$lib'
	import { Media, LayoutCentered, utils } from 'ezekit'
	export let data

	$: mobile = utils.device() != 'desktop'

	$: about = data.about[0]

	$: sets = {
		bad: {
			links: about['bad-links']
		},
		neutral: {
			links: about['neutral-links']
		},
		good: {
			links: about['good-links']
		}
	}
	const letters=['a','b','c','d','e','f']

	function colourise( c ) {
		let col = Color( c )
		return `border-color:${col}`
	}

	$: ext = {
		target: '_blank',
		class: 'bb'
	}

	$: btn = {
		class: 'flex button text-center sm-max-100'
	}

	$:format = utils.device() != 'desktop' ? '576x576x95' : '996x420x95xfit'

	const block  = "flex column-start-start wrap basis0pc grow cmb1 mb0 sm-max-100"
</script>

<svelte:head>
	<title>Autr | Gilbert Sinnott | Artist</title>
</svelte:head>
<div id="about" class="pt1 wrap">

	<!-- <div class="about-media">
		<Media file={about.cover[1]} {format} root="/pages/" class="" />
	</div>
	<div class="h1em sm-max-none" /> -->
	<div class="flex row wrap">
		<article class="{block} ">
			<Title>Bio</Title>
			<p>Gilbert Sinnott is an artist and creative engineer.</p>
			<p>
				Born: Bristol UK, 1987 <br />
				Lives: Berlin, since 2018
			</p>
			<!-- <a class="button" href="/about/cv">CV</a> -->
		</article>
		<div class="w0em sm-max-none" />
		<nav class="{block}">
			<Title>Contact</Title>
			<p>I'm trying to communicate less with social media - emails welcomed! Mailing list for updates (as they come).</p>
			<a href="/subscribe" {...btn}>subscribe to mailing list</a>
			<Mail {...btn} />
		</nav>
	</div>
	<div class="h1em sm-max-none" />
	<div class="flex row wrap">
		<div class="{block}">
			<Title>Links</Title>
			<div>
				{#each Object.entries( sets ) as [ type, about ] }
					<div class="flex column">
						{#each about?.links || [] as link,i}
							<a 
								target="_blank"
								class=" unclickable"
								href={link.item.href} 
								title={link.id}>
								<span 
									class="dot" />
								<span class="bb">
									{(link?.item?.text || '').trim()}
								</span>
							</a>
						{/each}
					</div>
				{/each}
			</div>
			<p>
				RSS feed is 
				<a {...ext} href="/rss.xml">available</a>.
				Some decent RSS readers are 
				<a {...ext} href="https://netnewswire.com">NetNewsWire</a>,
				<a {...ext} href="https://www.inoreader.com">Inoreader</a>.
		</div>
		<div class="w0em sm-max-none" />
		<div class="{block}">
			<Title>Studio Address</Title>
			<p>
				Gilbert Sinnott<br />
				Lacuna Lab e.V (H.H, V.H)<br />
				Paul-Lincke Ufer 44A<br />
				Berlin 10999
			</p>
			<p>
				<!-- <a {...ext} href="https://lacunalab.org">Lacuna Lab</a> /  -->
				<a {...ext} href="https://www.openstreetmap.org/node/4980951124">OpenStreetMap</a> 
			</p>
		</div>
	</div>



</div>