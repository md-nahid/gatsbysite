import styled, { css } from "styled-components"

const Wrapper = styled.div`
    width: 100%;
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    @media only screen and (max-width: 1366px) {
        padding-left: 20px;
        padding-right: 20px;
    }
    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
    }

    ${props => props.dflex && css`
        display: flex;
    `}

    ${props => props.alignEnd && css`
        justify-content: flex-end;
        align-items: center;
    `}

    ${props => props.alignBetween && css`
        justify-content: space-between;
        align-items: center;
    `}
    ${props => props.alignCenter && css`
        justify-content: space-around;
        align-items: center;
    `}

`



export default Wrapper;