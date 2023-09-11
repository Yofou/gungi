<main
	class="bg-lime-800 min-w-screen min-h-screen text-white pt-12 tablet:pt-20 font-primaryfont flex flex-col justify-center items-center gap-y-5"
>
	<div
		class="flex flex-col laptop:flex-row gap-y-5 gap-x-6 laptop:gap-x-12 w-full justify-around items-center px-3 tablet:px-8 laptop:px-12"
	>
		<div class="grid grid-cols-9 h-fit w-full tablet:w-[unset]">
			{#each board_state as square, i}
				{@const top_piece = square.pieces?.[0]}
				<div
					role="application"
					class="bg-[#eecaa0] border-[#bc7e38] border-t tablet:border-t-2 border-r p-1.5 tablet:border-r-2 border-solid tablet:w-16 laptop:w-20 desktop:w-24 aspect-square
					{i % 9 === 0 && 'border-l tablet:border-l-2'} {i >= 72 && 'border-b tablet:border-b-2'}"
					on:drop={(e) => (square = dropPieceOnBoard(e, square))}
					on:dragover={(e) => e.preventDefault()}
				>
					{#if top_piece}
						<img
							class="block"
							draggable="true"
							src="/img/{top_piece?.color}-{top_piece?.piece_type}-1.svg"
							alt="{top_piece?.color}-{top_piece?.piece_type}-1"
						/>
						<div
							class:hidden={square.pieces.length === 0}
							class="rounded-full number_img h-7 bg-blue-950 aspect-square flex justify-center items-center absolute -top-3 -right-3"
						>
							{square.pieces.length}
						</div>
					{/if}
				</div>
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
						class="grid grid-cols-3 tablet:grid-cols-7 laptop:grid-cols-6 desktop:grid-cols-8 gap-4"
					>
						{#each player.piece_data as piece (piece.id)}
							{@const piece_slug_name = piece.display_name.toLowerCase().replaceAll(' ', '')}
							<div class="h-12 laptop:h-14 aspect-square cursor-pointer relative">
								<img
									class="block"
									draggable="true"
									src="/img/{player.color}-{piece_slug_name}-1.svg"
									on:dragstart={(e) => {
										const {piece: data_of_piece , element} = stockpileDragStart(e,piece, i);
										draggedStockpilePiece = data_of_piece;
										draggedStockpilePieceElement?.appendChild(element)
									}}
									on:drag={pieceTrackMouse}
									on:dragend={() => {
										if (draggedStockpilePieceElement?.firstChild) {
											draggedStockpilePieceElement?.removeChild(draggedStockpilePieceElement?.firstChild)
										}
									}}
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
	<div bind:this={draggedStockpilePieceElement} />
</main>

<script lang="ts">
	import { dropPieceOnBoard, stockpileDragStart } from '$lib/game';
	import { piece_data, type BoardSquare, type Piece } from '$lib/pieces';

	let board_state: BoardSquare[] = Array.from({ length: 81 }, (_, i) => {
		return { id: i, pieces: [] };
	});

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

	let draggedStockpilePiece: Piece | null = null;
	let draggedStockpilePieceElement: HTMLElement | null = null;

	function pieceTrackMouse() {
		const element = draggedStockpilePieceElement!;
		element.style.position = "absolute";
		// const { img_element }: DragData = JSON.parse(e.dataTransfer?.getData("application/json") ?? '');
		// console.log(img_element)
	}
</script>

<style lang="postcss">
	h4 {
		@apply text-xl font-semibold;
	}

	:global(#dnd-action-dragged-el > .number_img) {
		@apply hidden;
	}
</style>
