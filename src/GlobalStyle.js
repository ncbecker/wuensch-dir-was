import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  *,*::before,*::after {
  box-sizing: content-box;
}
  
  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;
