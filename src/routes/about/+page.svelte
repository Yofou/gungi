<main
	class="bg-lime-800 min-w-screen min-h-screen text-white font-primaryfont flex flex-col justify-center items-center gap-y-5"
>
	<div class="flex flex-col gap-y-5 container">
		<h1>What is Gungi?</h1>
		<p>
			Gungi is a two-player strategy board game created by Yoshihiro Togashi and is featured in the
			in the popular manga Hunter x Hunter. <br /><br />

			It is played on a non-checkered gameboard with 81 squares arranged in a 9x9 grid. At the
			beginning of the game, players can choose how their pieces will be arranged on their side of
			the board. <br /><br />
			Additionally, unlike its spiritual brethren, chess, shogi, and go, in Gungi pieces can be stacked
			on top of each other, adding a third dimension to the game leading to billions and billions of
			possibilities. As in chess and shogi, the goal is to trap the king.
		</p>
		<h1>Pieces and Mobility</h1>
		<p>
			There are 13 unique pieces with different ranges of mobility at different tiers. <br />
			<small>
				Note: Blue means the piece can move into that square. Green symbolizes the ability of that
				piece to move in a continuous line along the path of that square.
			</small>
		</p>
	</div>
	<div class="flex flex-col gap-y-12 container">
		{#each Object.entries(piece_names) as [piece_name, piece_data]}
			<div class="flex flex-col gap-y-5 bg-lime-900 p-8 rounded-3xl">
				<div class="flex justify-between w-full" >
					<h4 class="capitalize text-xl font-semibold">
						{piece_data?.display_name ?? piece_name}
						<span class="normal-case">x{piece_data.amount}</span>
					</h4>
					{#if piece_data.note}
						<span><b>Note:</b> {piece_data.note}</span>
					{/if}
				</div>
				<div class="flex justify-between w-full">
					{#each { length: 3 } as _, i}
						{#if i + 1 <= piece_data.levels}
							<img
								src="/img/board/{piece_name}{i + 1}.svg"
								class="max-h-60"
								alt="{piece_name}{i + 1}"
							/>
						{/if}
					{/each}
				</div>
			</div>
		{/each}
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
