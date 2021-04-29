import React, { useState } from "react"

import "../styles/App.css"

import Game from "./Game"

const StarMatch = () => {
	const [gameId, setGameId] = useState(1)
	return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
}

const App = () => <StarMatch />

export default App
