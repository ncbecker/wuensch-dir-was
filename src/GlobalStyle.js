import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
  box-sizing: content-box;
}
  
  body {
    margin: 0;
    font-size: 16px;
  }
`;

export default GlobalStyle;
