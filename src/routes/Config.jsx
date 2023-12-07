import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from './LandingPage.jsx'
import Pregame from './Pregame.jsx'
import Category from './Category.jsx'
import Game from './Game.jsx'
import Score from './Score.jsx'

const router = createBrowserRouter([
	{
		path: '',
		element: <App />,

		children: [
			{
				path: '/',
				element: <LandingPage />
			},
			{
				path: 'pregame',
				element: <Pregame />
			},
			{
				path: 'category/:sessionId',
				element: <Category />
			},
			{
				path: 'game/:sessionId',
				element: <Game />
			},
			{
				path: 'score',
				element: <Score />
			},
			{
				path: '*',
				element: <LandingPage />
			}
		]
	}
])

export { router }