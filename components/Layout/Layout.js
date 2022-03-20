import React from 'react'
import Meta from '../Layout/Meta'
import Nav from '../Layout/Navigation/Nav'
import AppContent from '../UI/AppContent'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <AppContent>
                <Nav />
                {children}
                <Footer />
            </AppContent>
        </>
    )
}

export default Layout
