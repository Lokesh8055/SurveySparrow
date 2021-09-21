import { createGlobalStyle } from "styled-components";
import Banner from "./assets/Banner.png";

const GlobalStyles = createGlobalStyle`


:root {

  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;



  /* Colors */
  --clr-white: #fff;
  --clr-black: #000;
  --clr-primary: #7F8AC5;
  --clr-secondary: #4C5AA1;
  --clr-tertiary: #0C003A;
  --clr-text: #ECF1FB;
  --clr-button: #13A884;

  --green-1: #35e65d;
--grey-0: #808080;
--grey-1: #cdd8ec;
--grey-2: #f4f7f9;
--grey-3: #b5b5b5;
--turqois-1: #35cce6;
--turqois-2: #a3eaf7;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
    scroll-behavior: smooth;
    font-size: 62.5%;
}

body {
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    color: var(--clr-text);
    background: url(${Banner}) center/cover no-repeat;
    line-height: 1.2;
    min-height: 100vh;
    overflow-x: hidden;
}


ul,
ol {
    padding: 0;
    list-style-type: none;
}

a,
button {
    text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 0.875rem;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 8rem;
  }
  h2 {
    font-size: 3.8rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}


`;

export default GlobalStyles;
