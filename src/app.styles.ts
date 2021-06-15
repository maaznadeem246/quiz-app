import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        color: #696969;
        background-color: #ffe78154;
        margin: 0;
        padding: 0 20px;
        display flex;
        justify-content: center
    }
    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #696969;
    font-size: 1.8rem;
    margin: 0;
  }
  h1 {
    font-family: sans-serif;
    font-weight: 400;
    background-size: 100%;
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: transparent;
    color:#696969;
    border: 2px solid #696969;
    border-radius: 10px;
    height: 40px;
    font-weight:700;
    margin: 20px 0;
    padding: 0 40px;
    box-shadow: 2px 2px #696969;
  }
  .start {
    max-width: 200px;
  }
  .start:hover,.next:hover{
    opacity: 0.6;
  }
  .loading{
    color: #696969;
    font-size: 1.2rem;
    margin: 10px;  
  }
`;