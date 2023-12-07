import GameHeading from "../components/GameHeading"
import GamingTable from "../components/GamingTable"
import Players from "../components/Players"

function Game() {

	return (
		<main>
			<GameHeading />
			<Players />
			<section className="gaming-table-container">
				<GamingTable />
			</section>
		</main>
	)
}

export default Game