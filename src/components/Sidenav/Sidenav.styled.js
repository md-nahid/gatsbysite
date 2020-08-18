import styled from "styled-components"


const SideNavigation = styled.div`
    position: fixed;
    width: 30%;
    right: -20px;
    z-index: 2;
    top: 50px;
    overflow: auto;
    height: calc(100vh - 50px);
    background-color: #f7f7f7;
    border-left: 1px solid #f2f2f2;
    @media only screen and (max-width: 980px) {
        width: 35%;
    }
    @media only screen and (max-width: 768px) {
        display: none;
    }
    @media only screen and (max-width: 600px) {
        width: 100%;
        left: 0;
    }
`

export const NavlistContainer = styled.div`
    transform: translate(20px, 50px);
    margin-left: 20px;
    margin-right: 50px;
    @media only screen and (max-width: 1280px) {
        transform: translate(20px, 20px);
    }
`

export const List = styled.ul`
    list-style-type: none;
    >li {
        &:not(:first-child) {
            margin-top: 15px;
        }
        >a {
            display: block;
            padding: 10px 0;
            color: #6d6d6d;
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 0.08em;
            &:hover {
                color: #1a1a1a;
            }
            span {
                padding-left: 10px;
            }
        }
        >ul {
            list-style-type: none;
            >li {
                >a {
                    display: block;
                    padding: 5px 0;
                    text-align: left;
                    color: #6d6d6d;
                    &:hover {
                        color: #1a1a1a;
                    }
                }
                >ul {
                    list-style-type: none;
                    >li {
                        padding-left: 15px;
                        @media only screen and (max-width: 980px) {
                            padding-left: 8px;       
                        }
                        >a {
                            display: block;
                            padding: 5px 0;
                            text-align: left;
                            color: #6d6d6d;
                            &:hover {
                                color: #1a1a1a;
                            }
                        }
                    }
                }
            }
        }
    }
    
`




export default SideNavigation;

// background-color: rgb(247, 247, 247);