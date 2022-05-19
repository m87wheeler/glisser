import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        // COLORS
        --white: #ffffff;
        --black: #111111;

        --primary-10: #131725;
        --primary-10-contrast: var(--white);
        --primary-20: #1B223B;
        --primary-20-contrast: var(--white);
        --secondary-10: #FC6A00;
        --secondary-10-contrast: var(--white);

        --grey-10: #A2A5BF;


        // FONTS
        --font-family-sans: Lato, sans-serif;

        --font-size-h1: calc(1.375rem + 1.5vw);
        --font-size-sm: clamp(0.9rem, 0.86rem + 0.2vw, 1.1rem);
        --font-size-md: clamp(1rem, 0.95rem + 0.25vw, 1.25rem);
        --font-size-xl: clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem);
    
        // UI
        --border-radius-xs: .25rem;
        --border-radius-sm: .5rem;
        --border-radius-md: .75rem;
        --border-radius-lg: 1rem;

        --responsive-max: 1200px;
        --responsive-min: 800px;
    }



    html, body {
        width: 100%;
        height: 100%;
        max-width: 100vw;
        overflow-x: hidden;
        font-family: var(--font-family-sans);
        text-rendering: optimizeLegibility;
        background-color: var(--primary-10);
    }
`;
