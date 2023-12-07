import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Players() {
	const [isStats, setIsStats] = useState(false)
	const playerStatsRef = useRef(null)


	useEffect(() => {
		function handleClickOutside(event) {
			if (
				playerStatsRef.current &&
				!playerStatsRef.current.contains(event.target)
			) {
				setTimeout(() => {
					setIsStats(false);
				}, 0);
			}
		}
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, [playerStatsRef]);

	return (
		<main>
			<label
				className="player-container"
				onClick={() => setIsStats(!isStats)}>
				<p className="players">
					Spelare
				</p>
				<IoIosArrowDown className="player-arrow-icon" />
			</label>
			{isStats &&
				<section className="player-stats-container">
					<div 
					className="stats-content-container"
					ref={playerStatsRef}
					>
						<div className="stats-content">
							<div className="stats-profile">
								<div className="profile-container">
									<CgProfile className="standard-profile" />
								</div>
								<p className="stats-name">test</p>
							</div>
							<p className="stats-points">5p</p>
						</div>

						<div className="stats-content">
							<div className="stats-profile">
								<div className="profile-container">
									<CgProfile className="standard-profile" />
								</div>
								<p className="stats-name">test</p>
							</div>
							<p className="stats-points">5p</p>
						</div>
					</div>
				</section>
			}
		</main>
	)
}
export default Players