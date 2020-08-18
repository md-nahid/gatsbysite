import styled, { createGlobalStyle } from "styled-components"


export const Content = styled.div`
  flex-grow: 1;
`


const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            -webkit-font-smoothing: antialiased;
            text-shadow: rgba(0, 0, 0, 0.004) 1px 1px 1px;
        }
    }
    h1 {
        font-size: 40px;
        color: #333333;
    }
    h2 {
        font-size: 35px;
        color: #333333;
    }
    h3 {
        font-size: 30px;
        color: #333333;
    }
    h4 {
        font-size: 25px;
        color: #333333;
    }

    img {
        max-width: 100%;
        height: auto;
    }
    a {
        text-decoration: none;
        font-size: 16px;
        &:hover {
            color: #3333cc;
        }
    }

    .active {
        color: #61dafb;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            border-bottom: 3px solid #61dafb;
        }
    }
    @media only screen and (max-width: 768px) {
        .sidenavshow {
            display: block;
        }
    }
`


export default GlobalStyle;