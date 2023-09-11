<main
	class="bg-lime-800 min-w-screen min-h-screen text-white font-primaryfont flex flex-col justify-center items-center gap-y-5"
>
	<div class="flex gap-y-5 w-full desktop:px-24 justify-between">
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
			<div class="flex flex-col justify-between rounded-3xl bg-lime-950 text-white py-5 px-8">
				<h4>Tower details</h4>
			</div>
			{#each player_data as player}
				<div
					class="flex flex-col justify-between rounded-3xl gap-y-5 bg-lime-950 text-white py-5 px-8"
				>
					<div class="flex justify-between">
						<h4>{player.name}'s stockpile</h4>
					</div>
					<div class="grid grid-cols-10 gap-4">
						{#each Object.entries(player.piece_data) as [piece_name, piece]}
							<div class="h-12 aspect-square cursor-pointer relative">
								<img
									class="h-12 block"
									draggable="true"
									src="/img/{player.color}-{piece_name}-1.svg"
									alt="{player.color}-{piece_name}-1"
								/>
								<div
									class="rounded-full h-7 bg-blue-950 aspect-square flex justify-center items-center absolute -top-3 -right-3"
								>
									{piece.amount}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</main>

<script lang="ts">
	import { piece_data } from '$lib/pieces';

	type BoardPiece = {
		color: 'white' | 'black';
		piece_type:
			| 'marshal'
			| 'knight'
			| 'pawn'
			| 'general'
			| 'spy'
			| 'archer'
			| 'cannon'
			| 'samurai'
			| 'musketeer'
			| 'lieutenantgeneral'
			| 'majorgeneral'
			| 'captain'
			| 'fortress';
	};

	const board_state: BoardPiece[][] = new Array(81).fill([]);

	const player_data = [
		{
			name: 'Player 1',
			color: 'white',
			piece_data: structuredClone(piece_data)
		},
		{
			name: 'Player 2',
			color: 'black',
			piece_data: structuredClone(piece_data)
		}
	];
</script>

<style lang="postcss">
	h4 {
		@apply text-xl font-semibold;
	}
</style>
