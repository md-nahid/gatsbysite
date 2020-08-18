import React from 'react'
import Wrapper from "./Container.styled"
import PropTypes from "prop-types"


const Container = ({ dflex, alignEnd, alignBetween, children, alignCenter }) => {


    return (
        <div>
            <Wrapper dflex={dflex} alignEnd={alignEnd} alignBetween={alignBetween} alignCenter={alignCenter} >
                {children}
            </Wrapper>
        </div>
    )
}


Container.propTypes = {
    dflex : PropTypes.bool,
    alignEnd: PropTypes.bool,
    alignBetween: PropTypes.bool,
    alignCenter: PropTypes.bool,
    children: PropTypes.node.isRequired
}


export default Container