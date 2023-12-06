const characters = []

// Add number
for (let number = 0; number <= 9; number++) {
	characters.push(number.toString())
}

// Add uppercase letters
for ( let uppercase = 65; uppercase <= 90; uppercase++) {
	characters.push(String.fromCharCode(uppercase))
}

// Add lowercase letters
for (let lowercase = 97; lowercase <= 122; lowercase++) {
	characters.push(String.fromCharCode(lowercase))
}


function randomSessionID() {
	let newSessionIdArray = []
	for (let idLength = 0; idLength <= 8; idLength++) {
		const randomizeId = Math.floor(Math.random() * characters.length)
		const randomCharacter = characters[randomizeId]
		newSessionIdArray.push(randomCharacter)
	}
	const newSessionId = newSessionIdArray.join('')

	return newSessionId
}

export default randomSessionID