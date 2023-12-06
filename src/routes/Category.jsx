import { NavLink, useParams } from "react-router-dom"

function Category() {
	const { sessionId } = useParams()

	return (
		<main>
			<div className="header-options">
				<p className="rules-option">Regler</p>
				<NavLink to='/' className="nav-link">
					<p className="leave-option">Lämna</p>
				</NavLink>
			</div>
			<p className="session-id">Session ID: {sessionId}</p>
		</main>
	)
}

export default Category