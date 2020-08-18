import React from 'react'
import Layout from "../components/Layout/Layout"
import Sidenav from "../components/Sidenav/Sidenav"
import { Menu } from "../Containers/BlogSidenav/BlogSidenav.data"
import MobileMenu from "../components/MobileMenu/MobileMenu"

const Blog = () => {
    return (
        <Layout>
            <Sidenav Menu={Menu} />
            <MobileMenu />
            <h1>This is Blog page</h1>
            <h1>This is Blog page</h1>
            <h1>This is Blog page</h1>
            <h1>This is Blog page</h1>
            <h1>This is Blog page</h1>
            <h1>This is Blog page</h1>
            <h1>This is Blog page</h1>
        </Layout>
    )
}

export default Blog
