<section>
	<ol class="cards">
		<li>
			<a class="card" href="/system-design">
				<div class="header">
					<h2>System Design</h2>
				</div>
				<div class="content">
					<h4>Learn how to scale your system</h4>
				</div>
			</a>
		</li>
		<li>
			<a class="card" href="/data-structures-and-algorithms">
				<div class="header">
					<h2>Data Structures And Algorithms</h2>
				</div>
				<div class="content">
					<h4>Learn how to optimise your code</h4>
				</div>
			</a>
		</li>
	</ol>
</section>

<style lang="scss">
	@import '../../variables.scss';
	section {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		padding-top: 32px;
		padding-bottom: 32px;

		.cards {
			display: flex;
			flex-direction: row;
			list-style-type: none;

			@media (max-width: 780px) {
				flex-direction: column;
			}
			.card {
				border: 1px solid #ccc;
				border-radius: 8px;
				margin: 1em;
				display: flex;
				flex-direction: column;
				width: 300px;
				height: 250px;
				text-decoration: none;
				box-shadow: 24px;
				transition: box-shadow 0.3s;

				&:hover {
					box-shadow: 0 0 12px rgba(0, 0, 0, 0.4);
				}

				.header {
					border-radius: 4px 4px 0 0;
					display: block;
					flex: 1;
					text-align: center;
				}

				.content {
					padding: 2rem;
					display: flex;
					flex: 1;
					min-height: 0;
				}
			}
		}
	}
</style>
