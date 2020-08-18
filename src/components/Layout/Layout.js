import React from 'react'
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import Navbar from "../Navbar/Navbar"
import { ThemeProvider } from "styled-components"
import GlobalStyle, { Content } from "./Layout.styled"



const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={{}}>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>First gatsby site</title>
        </Helmet>
        <Navbar />
        {/* Global declearation */}
        <GlobalStyle />
        {/* Global declearation */}

            <Content>{children}</Content>

        </ThemeProvider>
    )
}


Layout.propTypes = {
    children: PropTypes.node.isRequired
}


export default Layout
