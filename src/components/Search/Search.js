import React from 'react'
import Wrapper, { Input } from "./Search.styled"
import SearchIcon from "../../images/search-icon-img.png"


const Search = () => {


    return (
        <div>
            <Wrapper>
                <Input bgimg={SearchIcon} className="MenuSearch" id="search" type="text" placeholder="Search" />
            </Wrapper>
        </div>
    )
}





export default Search;