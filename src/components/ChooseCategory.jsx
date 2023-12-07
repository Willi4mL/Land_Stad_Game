import { signal } from "@preact/signals"
import { useState } from "react"
import { NavLink, useParams } from "react-router-dom"

let allCategories = signal([])
function ChooseCategory() {
	const [categories, setCategories] = useState('')
	const { sessionId } = useParams()

	const inputCategory = (e) => {
		setCategories(e.target.value)
	}

	const confirmCategory = () => {
		allCategories.value = [...allCategories.value, categories]
		setCategories('')
	}

	const enterKeyConfirm = (e) => {
		if(e.key === 'Enter') {
			confirmCategory()
		}
	}
 
	return (
		<main>
			<section className="category-section">
				<div className="category-input-container">
					<input
						type="text"
						placeholder="Kategori"
						className="category-input"
						onChange={inputCategory}
						onKeyDown={enterKeyConfirm}
						value={categories}
					/>
					<button 
					className="confirm-category-button"
					onClick={confirmCategory}
					>OK
					</button>
				</div>
				<p className="choosen-categories-heading">Valda kategorier</p>
				<div className="categories-container">
					{allCategories.value.map((item, index) => (
						<p key={index} className="category">{item}</p>
					))}
				</div>
				<NavLink to={`/game/${sessionId}`}>
					<button className="start-game-button">Börja spela</button>
				</NavLink>
			</section>
		</main>
	)
}

export default ChooseCategory