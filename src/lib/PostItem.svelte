<script>

	import PostMedia from './PostMedia.svelte'
	import PostText from './PostText.svelte'
	import dayjsCJS from 'dayjs'
	import dayjsESM from 'dayjs/esm'

	let dayjs = !dayjsCJS ? dayjsESM : dayjsCJS

	export let id 
	export let text
	export let media
	export let created
	export let updated
	export let original = ''
	export let index 
	export let embed
	export let date
	export let status


</script>

<div 
	{id}
	class="rel flex row-center-stretch mb4 w100pc wrap">
	<div class="grow cmb1 no-basis flex column-flex-start-flex-start">
		<span class=" f1">{ dayjs(date * 1000).format("DD MMM YYYY") }</span>
		<span class="f0">{text}</span>
	</div>
	<div class="w2em" />
	<div class="basis45pc grow overflow-hidden flex column cmb2">
		<PostMedia 
			
			{...$$props} 
			autohide={true}  />
	</div>
	<div class="w2em" />
	<div class="grow f0 cmb1 no-basis">
		<div></div>
	</div>

				<!-- 
	<div class="flex row-stretch-stretch">
		<div class="post-media flex column grow no-basis rel">
			<PostMedia 
				{...$$props} 
				autohide={true}  />
		</div>
	</div>
	<PostText {...$$props} />

	<slot /> -->

	<div class="space h2em" />
</div>
