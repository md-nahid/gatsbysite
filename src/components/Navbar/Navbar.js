import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import { MdTranslate } from "react-icons/md"
import { BsBoxArrowUpRight } from "react-icons/bs"
import Wrapper, { NavTitleImg, MainMenu, NavExtra } from "./Navbar.styled"
import { Menu } from "./Navbar.data"

// importing objects
import SiteLogoImg from "../../images/react-logo.svg"
import Search from "../Search/Search"





const Navbar = () => {

  const [ path, setPath ] = useState(null);
  console.log(path);

  useEffect( () => {
    let navLink = document.querySelectorAll("#mainmenu > ul > li > a");
    navLink.forEach( (link) => {
        if(link.pathname === window.location.pathname) {
           link.classList.add("active");
           link.style.color = "#61dafb";
        }
    })
    });


    return (
        <Wrapper>
            <NavTitleImg>
                <Link onClick={(e) => {setPath(e.target.pathname)}} to="/">
                    <img src={SiteLogoImg} alt="logo"/>
                    <h4 className="nav-title">React</h4>
                </Link>
            </NavTitleImg>
            <MainMenu id="mainmenu">
                <ul>
                    {Menu.map( (item) => (
                        <li key={item.name}>
                            <Link onClick={(e) => {setPath(e.target.pathname)}} to={item.pathname}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </MainMenu>
            <NavExtra>
                <Search />
                <Link className="navversion" to="/version">v16.13.1</Link>
                <Link className="navlanguage" to="/languages">
                    <span className="languageicon"><MdTranslate /></span>
                    <span className="languagetext">Languages</span>
                </Link>
                <Link className="navgithub" to="https://github.com/facebook/react/" target="_blank">
                    Github
                    <span className="navgithubicon"><BsBoxArrowUpRight /></span>
                </Link>
            </NavExtra>
        </Wrapper>
    )
}





export default Navbar
