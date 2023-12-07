import Heading from "../components/Heading.jsx"
import ProfileInput from "../components/ProfileInput.jsx"
import GetSession from "../components/StartSession.jsx"

function Pregame() {


	return (
		<main>
			<Heading />
			<div className="session--position">
				<section className="session-container">
					<ProfileInput />
					<GetSession />

				</section>
			</div>
		</main>
	)
}

export default Pregame