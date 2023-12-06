import { NavLink, useParams } from "react-router-dom"
import Players from "../../components/Players"
import { useState } from "react"

function Category() {
	const [isRules, setIsRules] = useState(false)
	const { sessionId } = useParams()

	return (
		<main>
			<div className="header-options">
				<button
					className="rules-option"
					onClick={() => setIsRules(!isRules)}
				>Regler
				</button>
				<NavLink to='/' className="nav-link">
					<p className="leave-option">Lämna</p>
				</NavLink>
			</div>
			<p className="session-id">Session ID: {sessionId}</p>
			{isRules &&
				<section className="rules-container--position">
					<div className="rules-container">
						<p className="rules-heading">Regler</p>
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
					</div>
				</section>
			}
			<Players />
		</main>
	)
}

export default Category