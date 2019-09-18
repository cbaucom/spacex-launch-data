import React from 'react'

import { AppHeader, AppLogo } from './header.styles'
import logo from '../../images/spacex_logo_white.png';

const Header = () => (
	<AppHeader>
		<AppLogo src={logo} alt="logo" />
	</AppHeader>
)

export default Header;