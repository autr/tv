<script>
	import { Timestamp, utils } from 'ezekit'
	import { dev } from '$app/env'
	import { EZE } from '$lib/_stores.js'
	
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

	$: href = `/feed/${utils.year(date)}/${id}`

	export let format = 'DD-MM-YYYY' // 'D MMM, YYYY, dd'

</script>

<div class="post-text flex row-space-between-start">
	<div class="grow flex column-center-start">
		<a class="unclickable flex column-center-center activ8" {href}>
			<span class="minusbb filled p0-5 plr2">

				<Timestamp class=" flex" date={date} {format}></Timestamp>
			</span>
			{#if text.trim() != ''}
				<span class="minusbb p0-5 uppercase plr2 border f1 text-center flex column-center-center">
					{text}
				</span>
			{/if}
		</a>
	</div>
</div>
<!-- 

{#if dev}
	<a class="button mtb1 " href={`${$EZE.editor}items/posts/${id}`}>EZE</a>
{/if} -->