import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
	return (
		<>
			<h3 style={{ textAlign: 'center' }}>
				<Link to="/">Home</Link> | <Link to="/about">About</Link>
			</h3>
		</>
	)
}

export default Nav
