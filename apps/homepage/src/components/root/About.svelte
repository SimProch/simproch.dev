<script lang="ts">
	import { SkillButton } from '@simproch-dev/ui';
	import Contents from '../../contents/contents.json';
	const data = Contents.about;

	const { whoAmI, skills } = data.sections;
</script>

<section class="flex-col flex-col--center" id="about">
	<div class="base-width base-width--wider flex-col">
		<div class="flex-col">
			<h2>{data.title}</h2>
		</div>
		<div class="flex-row about">
			<div class="about__description">
				{#each whoAmI.blocks as block}
					<p>{block}</p>
				{/each}
			</div>

			<div class="about__skills">
				{#each skills.blocks as block}
					<div class="about__skills__block">
						<h3>{block.type}</h3>
						<div class="about__skills__block__list">
							{#each block.list as skill}
								<SkillButton name={skill.name} linkTo={skill.linkTo} />
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	section {
		background-color: rgb(240, 240, 240);
	}

	h2 {
		margin-bottom: 36px;
	}

	h3 {
		margin-bottom: 8px;
	}

	.about {
		gap: 3rem;

		.about__description {
			flex: 1;
		}

		.about__skills {
			flex: 1;

			.about__skills__block {
				&:not(:first-of-type) {
					margin-top: 24px;
				}

				.about__skills__block__list {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
				}
			}
		}
	}
</style>
