import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --color-light: #ecf2e4;
  --color-medium: #c0dcc3;
  --color-medium-200: #8db9aa;
  --color-dark: #86887b;
  --color-special: #f8e9a6;

  --color-white: #fff;
  --color-black: #000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: var(--color-medium);
  text-align: center;
}

.wave-one {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.wave-one svg {
  position: relative;
  display: block;
  width: 150%;
  height: 93px;
  transform: rotateY(180deg);
  z-index: 2;
}

.wave-one .shape-fill {
  fill: var(--color-light);
}


`;

export default GlobalStyles;
