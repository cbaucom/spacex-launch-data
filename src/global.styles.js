import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		padding: 0;
	}

	a {
		text-decoration: none;
		color: black;
	}

	* {
		box-sizing: border-box;
	}
`;
