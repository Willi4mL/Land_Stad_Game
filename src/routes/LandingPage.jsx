import { NavLink } from "react-router-dom"
import Heading from "../../components/Heading.jsx"

function LandingPage() {

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
				<NavLink to='session'>
					<button className="start-button">Start</button>
				</NavLink>
			</div>
		</main>
	)
}

export default LandingPage