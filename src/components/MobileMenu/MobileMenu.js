import React, { useState } from 'react'
import Wrapper from "./MobileMenu.styled"
import { FaChevronUp, FaChevronDown, FaTimes } from "react-icons/fa"

const MobileMenu = () => {

    const [ ismobilemenu, setIsmobilemenu ] = useState(false);


    const handleClick = () => {
        setIsmobilemenu(!ismobilemenu);
        let sidenavigation = document.getElementById("sidenavigation");
        sidenavigation.classList.toggle('sidenavshow');
    };
    


    return (
        <Wrapper onClick={handleClick}>
            {ismobilemenu ?  <div><FaTimes /></div> : 
                <div><FaChevronUp /><FaChevronDown /></div>}
        </Wrapper>
    )
}






export default MobileMenu
