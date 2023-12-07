import { NavLink, useParams } from "react-router-dom"

function ChooseCategory() {
	const { sessionId } = useParams()

	return (
		<main>
			<section className="category-section">
				<div className="category-input-container">
					<input
						type="text"
						placeholder="Kategori"
						className="category-input"
					/>
					<button className="confirm-category-button">OK</button>
				</div>
				<p className="choosen-categories-heading">Valda kategorier</p>
				<div className="categories-container">
					<p className="category">Spel</p>
					<p className="category">Djur</p>
					<p className="category">Dryck</p>
					<p className="category">Mat</p>
					<p className="category">Artist</p>
				</div>
				<NavLink to={`/game/${sessionId}`}>
					<button className="start-game-button">Börja spela</button>
				</NavLink>
			</section>
		</main>
	)
}

export default ChooseCategory