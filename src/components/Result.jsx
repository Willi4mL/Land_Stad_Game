import { CgProfile } from "react-icons/cg";

function Result() {


	return (
		<main>
			<div className="result-container">
				<p className="result-heading">Resultat</p>
				<div className="result-content">
					<div className="result-profile">
						<div className="result-profile-container">
							<CgProfile className="standard-profile" />
						</div>
						<p className="result-name">Kalle Johansson</p>
					</div>
					<p className="category-points">5p</p>
				</div>

				<div className="result-content">
					<div className="result-profile">
						<div className="result-profile-container">
							<CgProfile className="standard-profile" />
						</div>
						<p className="result-name">Frida Karlsson</p>
					</div>
						<p className="category-points">10p</p>
				</div>
			</div>
		</main>
	)
}

export default Result