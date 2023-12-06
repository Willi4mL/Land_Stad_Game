import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from './LandingPage.jsx'
import GetSession from './GetSession.jsx'
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
				path: 'session',
				element: <GetSession />
			},
			{
				path: 'category',
				element: <Category />
			},
			{
				path: 'game',
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