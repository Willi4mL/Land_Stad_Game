import { useState, useRef, useEffect } from "react";
import Heading from "../components/Heading.jsx"
import { CgProfile } from "react-icons/cg";
import randomSessionID from '../assets/randomSessionID.js'
import { NavLink } from "react-router-dom";

function GetSession() {
	const [imageSrc, setImageSrc] = useState(null)
	const [playerName, setPlayerName] = useState('')
	const [joinId, setJoinId] = useState('')
	const [newSessionId, setNewSessionId] = useState('')
	const fileInputRef = useRef(null)
	const nameInputRef = useRef(null)

	useEffect(() => {
		setNewSessionId(randomSessionID())
	}, [])

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

	// Start session with random id
	const handleNewSession = () => {
		setNewSessionId(randomSessionID())
	}

	// Join session
	const joinSessionId = (e) => {
		const newIdValue = e.target.value
		setJoinId(newIdValue)
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
							<NavLink to={`/category/${newSessionId}`}>
								<button
									className="session-button"
									onClick={handleNewSession}
								>Start session
								</button>
							</NavLink>
							<div className="join-session-container">
								<input
									className="join-session-input"
									placeholder="Session id"
									onChange={joinSessionId}
								/>
								<NavLink to={`/category/${joinId}`}>
									<button className="session-button join-session-button">Gå med session</button>
								</NavLink>
							</div>
						</section>
					}
				</section>
			</div>
		</main>
	)
}

export default GetSession