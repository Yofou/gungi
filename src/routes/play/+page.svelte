<main
	class="bg-lime-800 min-w-screen min-h-screen text-white font-primaryfont flex flex-col justify-center items-center gap-y-5"
>
	<div class="flex gap-y-5 container">
		<div class="grid grid-cols-9">
			{#each { length: 81 } as _, i}
				<div
					class="bg-[#eecaa0] border-[#bc7e38] border-t-2 border-r-2 border-solid h-24 aspect-square 
					{i % 9 === 0 && 'border-l-2'} {i >= 72 && 'border-b-2'}"
				/>
			{/each}
		</div>
	</div>
</main>

<script lang="ts">
	const piece_names: Record<
		string,
		{ amount: number; levels: number; display_name?: string; note?: string }
	> = {
		majorgeneral: { amount: 4, levels: 3, display_name: 'Major General' },
		lieutenantgeneral: { amount: 4, levels: 3, display_name: 'Lieutenant General' },
		general: { amount: 6, levels: 3 },
		archer: { amount: 2, levels: 3 },
		knight: { amount: 2, levels: 3 },
		musketeer: { amount: 1, levels: 3 },
		captain: {
			amount: 1,
			levels: 1,
			note: 'The captain takes on the movement ability of the piece (friendly or opponent) that is directly below it.'
		},
		samurai: { amount: 2, levels: 3 },
		fortress: {
			amount: 1,
			levels: 1,
			note: "Fortresses can't stack on other pieces; they can only be stacked upon."
		},
		cannon: { amount: 2, levels: 3 },
		spy: { amount: 2, levels: 3 },
		pawn: { amount: 9, levels: 3 },
		marshall: {
			amount: 1,
			levels: 1,
			display_name: 'Marshall (King)',
			note: 'The Marshal moves the same for all tiers. Pieces cannot be stacked on the Marshal.'
		}
	};
</script>

<style lang="postcss">
	h1 {
		@apply font-semibold text-6xl;
	}
	p {
		@apply text-xl;
	}
	small {
		@apply text-base;
	}
</style>
