<script context="module">
	import api from '$lib/api.js'
	export const load = async ({ fetch, page }) => {
		return { props: { data: await api.feed( fetch ) } }
	}
</script>

<script>
	import { Timestamp } from 'ezekit'
	import { Title } from '$lib'
	import dayjs from 'dayjs'

	export let data


	function url(item) { 
		return `/feed/${(new Date( item.date * 1000)).getFullYear()}/${item.id}`
	}

	const gen = (text, href) => ({text,href})

	$: links = {
		Feed: data.map( item => {
			return {
				text: dayjs( item.date  * 1000 ).format('D MMM, YYYY, dd'),
				href: url( item )
			}
		}),
		// Works: []	,
		Pages: [
			gen('about', '/about'),
			gen('works', '/works'),
			gen('subscribe', '/subscribe'),
			// gen('impressum', '/impressum'),
			gen('rss', '/rss.xml')
		]
	}
</script>

<nav class="flex row">

	{#each Object.entries(links) as [name, list] }
		<div class="flex column pt1 grow">
			<Title>{name}</Title>
			<div class="flex column-stretch-start grow pt1">
				{#each list as {text, href} }
					<a class="unclickable ptb0-5 flex row-space-between-center f1" {href}>
						{text}
					</a>
				{/each}
			</div>
		</div>

	{/each}


</nav>