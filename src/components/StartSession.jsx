import { useState, useEffect } from "react";
import randomSessionID from '../utils/randomSessionID.js'
import { NavLink } from "react-router-dom";
import { useRecoilState } from "recoil";
import { isPlayerName } from "../states/player.js";

function GetSession() {
	const [playerName, setPlayerName] = useRecoilState(isPlayerName)
	const [joinId, setJoinId] = useState('')
	const [newSessionId, setNewSessionId] = useState('')

	useEffect(() => {
		setNewSessionId(randomSessionID())
	}, [])

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
			{playerName !== '' && 
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
		</main>
	)
}

export default GetSession