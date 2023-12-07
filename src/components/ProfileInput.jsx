import { useState, useRef } from "react";
import { CgProfile } from "react-icons/cg";
import { useRecoilState } from "recoil";
import { isPlayerName } from "../states/player.js";

function ProfileInput() {
	const [imageSrc, setImageSrc] = useState(null)
	const [playerName, setPlayerName] = useRecoilState(isPlayerName)
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
		</main>
	)
}

export default ProfileInput