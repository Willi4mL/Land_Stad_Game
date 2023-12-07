import { NavLink, useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

function GameHeading() {
	const [isRules, setIsRules] = useState(false)
	const { sessionId } = useParams()
	const rulesRef = useRef(null)

	// Close the rules if a click occurs outside the element or on the rules button
	useEffect(() => {
		function handleClickOutside(event) {
			if (
				rulesRef.current &&
				!rulesRef.current.contains(event.target)
			) {
				setTimeout(() => {
					setIsRules(false);
				}, 0);
			}
		}
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [rulesRef]);

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
					<div
						className="rules-container-category"
						ref={rulesRef}
					>
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
		</main>
	)
}

export default GameHeading