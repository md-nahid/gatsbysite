import styled from "styled-components"

const Wrapper = styled.div`
    padding: 5px 0;
`
export const Input = styled.input`
    font-size: 16px;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 40px;
    border: none;
    border-radius: 5px;
    outline: none;
    color: #ffffff;
    width: 180px;
    background-color: #20232a;
    background-image: url(${props => (props.bgimg ? props.bgimg : "")});
    background-repeat: no-repeat;
    background-position: 3px 3px;
    background-size: 25px;
    transition: width 0.5s ease-in-out;
    &:placeholder {
        color: rgb(195, 195, 195);
    }
    &:focus {
        width: 180px;
        background-color: #333333;
    }
    @media screen and (max-width: 1180px) {
        width: 0px;
    }
`


export default Wrapper;