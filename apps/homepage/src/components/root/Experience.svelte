<script lang="ts">
	import Company from '../utils/Company.svelte';
	import Contents from '../../contents/contents.json';
	const data = Contents.experience;
</script>

<section id="experience" class="flex-col flex-col--center">
	<div class="flex-col base-width">
		<h2>{data.title}</h2>
	</div>
	<div class="flex-col wrapper base-width">
		{#each data.blocks as company}
			<div class="company-info">
				<Company
					imagePath={company.identifier}
					title={company.companyName}
					content={company.content}
				/>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	h2 {
		text-align: left;
		margin-bottom: 32px;
	}

	.company-info {
		&:not(:last-of-type) {
			margin-bottom: 36px;
		}
	}

	.wrapper {
		gap: 40px;
	}
</style>
