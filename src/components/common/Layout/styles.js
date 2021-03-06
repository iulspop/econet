import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const Global = createGlobalStyle`
	${normalize}

	html {
		// This defines value of 1rem
    font-size: 62.25%; // 1rem = 10px; 10px/16px = 62.25%
    
    scroll-behavior: ${props =>
      props.theme.page === "residential" || props.theme.page === "commercial"
        ? "smooth"
        : "auto"};
	}

	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}

	body {
		box-sizing: border-box;

		font-family: sofia_prolight, sans-serif;
		font-size: 2.1rem;
		font-weight: 400;
    line-height: 1.7;
    
    @media only screen and ${props => props.theme.media.phone} {
      font-size: 1.95rem;
    }
	}
`
