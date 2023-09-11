<main
	class="bg-lime-800 min-w-screen min-h-screen text-white font-primaryfont flex flex-col justify-center items-center gap-y-5"
>
	<div class="flex gap-y-5 w-full desktop:px-24 justify-between">
		<div class="grid grid-cols-9" use:dndzone={{ items: [] }}>
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
			{#each player_data as player, i}
				<div
					class="flex flex-col justify-between rounded-3xl gap-y-5 bg-lime-950 text-white py-5 px-8"
				>
					<div class="flex justify-between">
						<h4>{player.name}'s stockpile</h4>
					</div>
					<div
						class="grid grid-cols-10 gap-4"
						use:dndzone={{
							items: Object.values(player.piece_data),
							type: `stockpile_pieces_${i}`,
							dropFromOthersDisabled: true
						}}
						on:consider={(e) => handleDndConsider(e, i)}
					>
						{#each player.piece_data as piece (piece.id)}
							{@const piece_slug_name = piece.display_name.toLowerCase().replaceAll(' ', '')}
							<div class="h-12 aspect-square cursor-pointer relative">
								<img
									class="h-12 block"
									draggable="true"
									src="/img/{player.color}-{piece_slug_name}-1.svg"
									alt="{player.color}-{piece_slug_name}-1"
								/>
								<div
									class="rounded-full number_img h-7 bg-blue-950 aspect-square flex justify-center items-center absolute -top-3 -right-3"
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
	import { dndzone, TRIGGERS, SHADOW_ITEM_MARKER_PROPERTY_NAME } from 'svelte-dnd-action';
	import { piece_data, type Piece } from '$lib/pieces';

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

	let shouldIgnoreDndEvents = false;
	function handleDndConsider(e: CustomEvent, player_number: number) {
		const { trigger, id } = e.detail.info;
		const items = player_data[player_number].piece_data;
		if (trigger === TRIGGERS.DRAG_STARTED) {
		    const idx = items.findIndex(item => item.id === id);
		    const newId = `${id}_copy_${Math.round(Math.random()*100000)}`;
			// the line below was added in order to be compatible with version svelte-dnd-action 0.7.4 and above
			e.detail.items = e.detail.items.filter((item: Piece) => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME as keyof Piece]);
		    e.detail.items.splice(idx, 0, {...items[idx], id: newId});
		    player_data[player_number].piece_data = e.detail.items;
		    shouldIgnoreDndEvents = true;
		}
		else if (!shouldIgnoreDndEvents) {
		    player_data[player_number].piece_data = e.detail.items;
		}
		else {
		    player_data[player_number].piece_data = [...items];
		}
	}
</script>

<style lang="postcss" >
	h4 {
		@apply text-xl font-semibold;
	}
	
	:global(#dnd-action-dragged-el > .number_img) {
		@apply hidden;
	}
</style>
