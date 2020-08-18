import React from 'react'
import Layout from "../components/Layout/Layout"
import Sidenav from "../components/Sidenav/Sidenav"
import { Menu } from "../Containers/TutorialsSidenav/TutorialsSidenav.data"
import MobileMenu from "../components/MobileMenu/MobileMenu"

const tutorials = () => {
    return (
        <Layout>
            <Sidenav Menu={Menu} />
            <MobileMenu />

        </Layout>
    )
}





export default tutorials
