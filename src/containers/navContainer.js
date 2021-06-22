import React from 'react';
import { Nav, Header, Footer } from '../components'

export function NavContainer() {
    return (
        <Nav>
            <Footer.WordLogo src="/images/logo/miryu.png" />
            <Nav.Inner>
                <Footer.Logo src="/images/logo/logo.png" />
                <Header.Button>Sign In</Header.Button>
            </Nav.Inner>
        </Nav>
    )
}