import { NavLink } from "react-router-dom"

function Heading() {
	return (
		<section className="heading-container">
			<NavLink to='/' className='nav-link'>
				<h1 className="heading">
					Land & Stad
				</h1>
			</NavLink>
		</section>
	)
}
export default Heading