<style>
	div {
		height: 1.5em;
		width: 10em;
		text-align: center;
		border: 1px solid black;
		margin: 0.2em;
		padding: 0.3em;
	}
	section {
		min-height: 12em
	}
</style>
<script lang="ts" >
	import {dndzone} from 'svelte-dnd-action';
	import {flip} from 'svelte/animate';
	const flipDurationMs = 200;
	
	export let items: any[] = [];
	export let type: string;
	
	function handleSort(e: CustomEvent) {
		items = e.detail.items;
	}
</script>
<section use:dndzone={{items, flipDurationMs, type}} on:consider={handleSort} on:finalize={handleSort}>
	{#each items as item(item.id)}
		<div style={type === 'dark'? 'background-color:rgba(0,0,0,0.7); color: white': ''} animate:flip={{duration:flipDurationMs}}>
			{item.title}	
		</div>
	{/each}
</section>