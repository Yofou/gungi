<main
	class="bg-lime-800 min-w-screen min-h-screen text-white font-primaryfont flex flex-col justify-center items-center gap-y-5"
>
	<div class="flex gap-y-5 container justify-between">
		<div class="grid grid-cols-9">
			{#each { length: 81 } as _, i}
				<div
					class="bg-[#eecaa0] border-[#bc7e38] border-t-2 border-r-2 border-solid h-24 aspect-square
					{i % 9 === 0 && 'border-l-2'} {i >= 72 && 'border-b-2'}"
				/>
			{/each}
		</div>
		<div class="flex flex-col gap-y-6">
			<h2 class="font-bold text-4xl">Game Phase</h2>
			<div class="flex flex-col justify-between rounded-full bg-lime-950 text-white py-3 px-5">
				<h4>Tower details</h4>
			</div>
			{#each player_data as player}
				<div class="flex flex-col justify-between rounded-full bg-lime-950 text-white py-3 px-5">
					<div class="flex justify-between" >
						<h4>{player.name}'s stockpile</h4>
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>

<script lang="ts">
	import { piece_data } from '$lib/pieces';

	const player_data = [
		{
			name: 'Player 1',
			piece_data: structuredClone(piece_data)
		},
		{
			name: 'Player 2',
			piece_data: structuredClone(piece_data)
		}
	];
</script>

<style lang="postcss">
	h4 {
		@apply text-xl font-semibold;
	}
</style>
