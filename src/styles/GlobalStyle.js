import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
      
}

a{
    text-decoration:none;
}
ul, ol, li{
    list-style-type: style none;
}

button{
    cursor: pointer;
    background-color:transparent;
    border:none;
}

`;
