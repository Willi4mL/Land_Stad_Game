import { useState, useRef } from "react";
import Heading from "../../components/Heading"
import { CgProfile } from "react-icons/cg";

function GetSession() {
	const [imageSrc, setImageSrc] = useState(null)
	const [playerName, setPlayerName] = useState('')
	const fileInputRef = useRef(null)
	const nameInputRef = useRef(null)

	// Opening the file selection dialog
	const handleButtonClick = () => {
		fileInputRef.current.click();
	}

	const handleImageChange = (event) => {
		const file = event.target.files[0]

		if (file) {
			// Read file content
			const reader = new FileReader()

			// Sets image source url to setImageSrc state
			reader.onload = (e) => {
				setImageSrc(e.target.result)
			}

			// Read image content
			reader.readAsDataURL(file)
		}
	}

	return (
		<main>
			<Heading />
			<div className="session--position">
				<section className="session-container">
					<input
						className="name-input"
						placeholder="Namn"
						ref={nameInputRef}
						onChange={(e) => setPlayerName(e.target.value)}
					/>
					<div className="profile-image-container">
						<input
							ref={fileInputRef}
							type="file"
							style={{ display: 'none' }}
							onChange={handleImageChange}
						/>
						<button
							className="session-button"
							type="button"
							onClick={handleButtonClick}
						>Bild
						</button>
						<div className="profile-container">
							{imageSrc ? (
								<img src={imageSrc} alt="Selected profile" className="chosen-profile" />
							) : (
								<CgProfile className="standard-profile" />
							)}
						</div>
					</div>
					{playerName !== '' && nameInputRef.current.value !== '' &&
						<section className="start-session-container">
							<button className="session-button">Start session</button>
							<div className="join-session-container">
								<input
									className="join-session-input"
									placeholder="Session id" />
								<button className="session-button join-session-button">Gå med session</button>
							</div>
						</section>
					}
				</section>
			</div>
		</main>
	)
}

export default GetSession