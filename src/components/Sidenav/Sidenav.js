import React, { useState, useEffect } from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { FaChevronUp, FaChevronDown } from "react-icons/fa"
import SideNavigation, { NavlistContainer, List } from "./Sidenav.styled"

const Sidenav = ({ Menu }) => {

    const [ dropdownicon, setDropdownicon ] = useState(false);

    useEffect(() => {
        const MainMenu = document.querySelectorAll(".main-menu");
        MainMenu.forEach( item => {
            if(item.pathname === window.location.pathname) {
                item.style.color = "red";
            }
        })
    }, [])

    
    return (
        <div>
            <SideNavigation id="sidenavigation">
                <NavlistContainer>
                    {Menu.map((item) => (
                        <List key={item.name}>
                            <li>
                                <Link className="main-menu" onClick={() => {setDropdownicon(!dropdownicon)}} to={item.pathname}>{item.name} 
                                    <span>{dropdownicon ? <FaChevronUp /> : <FaChevronDown />}</span>
                                </Link>
                                {/* if item has dropdown */}
                                {item.dropdown && <ul className="drop-down-menu">
                                    {item.dropdown.map((dropdownitem) => (
                                        <li key={dropdownitem.name}><Link to={dropdownitem.pathname}>{dropdownitem.name}</Link>
                                            {dropdownitem.dropdown && <ul>
                                                {dropdownitem.dropdown.map((dipdropdown) => (
                                                    <li key={dipdropdown.id}><Link to={dipdropdown.id}>{dipdropdown.name}</Link></li>
                                                ))}
                                            </ul>}
                                        </li>
                                    ))}
                                </ul>}
                            </li>
                        </List>
                    ))}
                </NavlistContainer>
            </SideNavigation>
        </div>
    )
}



Sidenav.propTypes = {
    Menu: PropTypes.array.isRequired,
}





export default Sidenav;
