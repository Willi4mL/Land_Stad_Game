import { signal } from "@preact/signals"
import { useEffect, useState } from "react"
import { NavLink, useParams } from "react-router-dom"
import { ImCross } from "react-icons/im";

export let allCategories = signal([])
function ChooseCategory() {
	const [categories, setCategories] = useState('')
	const [toggleCategory, setToggleCategory] = useState(false)
	const { sessionId } = useParams()


	// Set category input value
	const inputCategory = (e) => {
		setCategories(e.target.value)
	}

	// Confirm new category
	const confirmCategory = () => {
		allCategories.value = [...allCategories.value, categories]
		setCategories('')
	}

	// Confirm category by enter key
	const enterKeyConfirm = (e) => {
		if (e.key === 'Enter') {
			confirmCategory()
		}
	}

	// Delete category
	const deleteCategory = (index) => {
		const updatedCategories = allCategories.value.filter((_, i) => i !== index)
		allCategories.value = updatedCategories
		
		setToggleCategory(!toggleCategory)
	}

	// Upadate page with categories after delete
	useEffect(() => {
		allCategories.value
	}, [toggleCategory])

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
					{allCategories.value.length > 0 && (
						<>
							{allCategories.value.map((item, index) => (
								<div
									className="category--position"
									key={index}>
									<p
										className="category">
										{item}
									</p>
									<ImCross
										className="delete-category"
										onClick={() => deleteCategory(index)}
									/>
								</div>
							))}
						</>
					)}

				</div>
				<NavLink to={`/game/${sessionId}`}>
					<button
						className="start-game-button"
						onClick={() => allCategories.value = []}
					>Börja spela
					</button>
				</NavLink>
			</section>
		</main>
	)
}

export default ChooseCategory