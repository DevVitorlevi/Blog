
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body {
        width: 100vw;
        height: 100vh;
    }
    span{
      color: aliceblue;
      font-size: 90px;
    }


`;
export default GlobalStyles;