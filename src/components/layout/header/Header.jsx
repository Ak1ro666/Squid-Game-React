import React from 'react'
import Navigation from './navigation/Navigation'
import Hamburger from './Hamburger'
import Logo from './Logo'

const Header = () => {
	return (
		<div className='flex justify-between items-center'>
			<Logo />
			<Navigation />
			<Hamburger />
		</div>
	)
}

export default Header
