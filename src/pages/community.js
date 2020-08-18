import React from 'react'
import Layout from "../components/Layout/Layout"
import Sidenav from "../components/Sidenav/Sidenav"
import { Menu } from "../Containers/CommunitySidenav/CommunitySidenav.data"
import MobileMenu from "../components/MobileMenu/MobileMenu"

const Community = () => {
    return (
        <Layout>
            <Sidenav Menu={Menu} />
            <MobileMenu />
            <h1>This is Community page</h1>
            <h1>This is Community page</h1>
            <h1>This is Community page</h1>
            <h1>This is Community page</h1>
            <h1>This is Community page</h1>
        </Layout>
    )
}

export default Community;
