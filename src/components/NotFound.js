import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
	return (
		<>
			<h1 style={{ textAlign: 'center' }}>
				The page you are looking for does not exist
				<br />
				<Link to="/">Home</Link>
			</h1>
		</>
	)
}

export default NotFound
