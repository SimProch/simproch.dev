<script lang="ts">
	import { SkillButton, LinkButton } from '@simproch-dev/ui';
	type DataType = {
		overview: {
			title: string;
			textBlocks: string[];
		};
		skills: {
			title: string;
			skills: { name: string; linkTo: string }[];
		};
		actions: {
			name: string;
			linkTo: string;
		}[];
	};

	export let data: DataType;
</script>

<section class="flex-col flex-col--center wrapper">
	<div class="base-width flex-col">
		<div class="flex-col overview">
			<h2>{data.overview.title}</h2>
			<div class="overview__text">
				{#each data.overview.textBlocks as textBlock}
					<p>{textBlock}</p>
				{/each}
			</div>
		</div>

		<div class="flex-col skills">
			<h3>{data.skills.title}</h3>
			<div class="skill__list">
				{#each data.skills.skills as skill}
					<SkillButton name={skill.name} linkTo={skill.linkTo} />
				{/each}
			</div>
		</div>
		<div class="flex-row">
			{#each data.actions as action}
				<LinkButton name={action.name} linkTo={action.linkTo} />
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background-color: rgb(240, 240, 240);
	}

	h2 {
		margin-bottom: 12px;
	}

	h3 {
		padding-bottom: 8px;
	}

	.overview__text {
		margin-bottom: 20px;
	}

	.skills {
		margin-bottom: 80px;
		.skill__list {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
</style>
