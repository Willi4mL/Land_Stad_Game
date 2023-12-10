import GameHeading from "../components/GameHeading"
import GamingTable from "../components/GamingTable"
import Players from "../components/Players"
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react"

function Game() {
	const [timeLeft, setTimeLeft] = useState({
		minutes: null,
		seconds: null,
	})
	const { sessionId } = useParams()

	const playTimePerMin = 0.1

	useEffect(() => {
		let fullTime = 1000 * 60 * playTimePerMin

		const countdownInterval = setInterval(() => {
			// Update the fullTime value for countdown
			fullTime -= 1000;

			if (fullTime >= 0) {
				setTimeLeft({
					minutes: Math.floor((fullTime / 1000 / 60) % 60),
					seconds: Math.floor((fullTime / 1000) % 60),
				})
			} else {
				clearInterval(countdownInterval)
			}
		}, 1000)

		return () => clearInterval(countdownInterval)
	}, [])

	return (
		<main>
			<GameHeading />
			<Players />
			<p 
			className="countdown">Tid: 
			<span 
			className={timeLeft.minutes < 1 ? "countdown-last-min" : "countdown"}>
				{timeLeft.minutes}:{timeLeft.seconds}
				</span>
				</p>
			<section className="gaming-table-container">
				<GamingTable />
			</section>
			{timeLeft.minutes == 0 && timeLeft.seconds == 0 && (
				<Navigate to={`/score/${sessionId}`}></Navigate>
			)}
		</main>
	)
}

export default Game