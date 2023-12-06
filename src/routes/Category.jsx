import { useParams } from "react-router-dom"

function Category() {
	const { sessionId } = useParams()

	return (
		<main>
			<div className="header-options">
				<p className="rules-option">Regler</p>
				<p className="leave-option">Lämna</p>
			</div>
			<p className="session-id">Session ID: {sessionId}</p>
		</main>
	)
}

export default Category