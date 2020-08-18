import styled from "styled-components"


const Wrapper = styled.div`
    z-index: 99;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    color: rgb(97, 218, 251);
    background-color: rgb(32, 35, 42);
    position: fixed;
    bottom: 50px;
    right: 50px;
    display: none;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
        display: block;
    }
    div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        font-size: 18px;
    }
`





export default Wrapper;