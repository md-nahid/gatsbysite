import styled from 'styled-components'



const Wrapper = styled.nav`
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    background-color: #20232a;
    display: flex;
    align-items: center;
    padding-left: 7%;
    padding-right: 5%;
    @media screen and (max-width: 600px) {
        padding-left: 1%;
        padding-right: 0;
    }
    a {
        color: #ffffff;
    }
`

export const NavTitleImg = styled.div`
    >a {
        display: flex;
        align-items: center;
        padding: 15px 8px;
        min-width: 150px;
        margin-right: 20px;
        @media screen and (max-width: 1280px) {
            min-width: 150px;
        }
        @media screen and (max-width: 768px) {
            min-width: 100px;
        }
        @media screen and (max-width: 600px) {
            min-width: 40px;
            padding-right: 0;
        }
        img {
            width: 25px;
            margin-right: 5px;
            @media screen and (max-width: 1280px) {
                width: 20px;
            }
        }    
        h4 {
            color: #61dafb;
            font-size: 20px;
            @media screen and (max-width: 1024px) {
                font-size: 18px;
            }
            @media screen and (max-width: 600px) {
                display: none;
            }
        }
    }
    
`

export const MainMenu = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    >ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        align-items: center;
        >li a {
            font-size: 18px;
            display: block;
            padding: 25px 15px;
            font-weight: 300;
            &:focus {
                background-color: #333333;
            }
            @media screen and (max-width: 1280px) {
                font-size: 15px;
                padding: 20px 15px;
            }
            @media screen and (max-width: 768px) {
                padding: 20px 8px;
            }
            &:hover {
                color: #61dafb;
            }
        }
    }
`

export const NavExtra = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: auto;
    >a {
        padding: 7px 10px;
        font-size: 14px;
        margin-left: 15px;
        font-weight: 100;
        border-radius: 10px;
        &:hover {
            color: #61dafb;
        }
        &:focus {
            color: #61dafb;
            background-color: #333333;
        }
    }
    .navversion {
        @media screen and (max-width: 780px) {
            display: none;
        }
    }
    .navlanguage {
        .languageicon {
            font-size: 20px;
            margin-right: 5px;
        }
        .languagetext {
            @media screen and (max-width: 780px) {
                display: none;
            }
        }
    }
    .navgithub {
        @media screen and (max-width: 980px) {
            display: none;
        }
    }

`



export default Wrapper;




