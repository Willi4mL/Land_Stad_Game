
function GamingTable() {

	return (
		<main>
			<div className="player-game-container">
				<p className="game-category">Spel:</p>
				<p className="game-letter">P</p>
				<input 
				className="game-players-word"
				placeholder="Skriv här"
				/>
			</div>
			<div className="player-game-container">
				<p className="game-category">Djur:</p>
				<p className="game-letter">Y</p>
				<input 
				className="game-players-word"
				placeholder="Skriv här"
				/>
			</div>
			<div className="player-game-container">
				<p className="game-category">Dryck:</p>
				<p className="game-letter">D</p>
				<input 
				className="game-players-word"
				placeholder="Skriv här"
				/>
			</div>
			<div className="player-game-container">
				<p className="game-category">Mat:</p>
				<p className="game-letter">A</p>
				<input 
				className="game-players-word"
				placeholder="Skriv här"
				/>
			</div>
			<div className="player-game-container">
				<p className="game-category">Artis:</p>
				<p className="game-letter">R</p>
				<input 
				className="game-players-word"
				placeholder="Skriv här"
				/>
			</div>
		</main>
	)
}

export default GamingTable