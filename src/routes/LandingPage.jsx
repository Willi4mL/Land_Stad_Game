import { NavLink } from "react-router-dom"
import Heading from "../components/Heading.jsx"
import { useRecoilState } from "recoil";
import { isPlayerName } from "../states/player.js";

function LandingPage() {
	const [playerName, setPlayerName] = useRecoilState(isPlayerName)


	return (
		<main>
			<Heading />
			<section className="rules-container">
				<p className="rules-text">
					Land och stad spelas vanligtis med två eller flera spelare.
					Alla spelare kommer skriva valfria kategorier.
				</p>
				<p className="rules-text">
					När spelet har börjat kommer en bokstav placeras bakom varje
					kategori som spelaren ska använda sig av. Den bokstaven ska ordet
					till kategorin börja på. Man får ett poäng om man är flera med
					samma ord till kategorin och två poöng ifall man är ensam med ordet.
				</p>
			</section>
			<div className="start-button--position">
				<NavLink to='pregame'>
					<button 
					className="start-button"
					onClick={() => setPlayerName('')}
					>Start
					</button>
				</NavLink>
			</div>
		</main>
	)
}

export default LandingPage