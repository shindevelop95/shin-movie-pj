import React from 'react';
import { Nav, Header, Footer } from '../components'
import * as ROUTES from '../constant/routes'

export function NavContainer() {
    return (
        <Nav>
            <Footer.WordLogo to={ROUTES.HOME} src="/images/logo/miryu.png" />
            <Nav.Inner>
                <Footer.Logo src="/images/logo/logo.png" />
                <Header.Button to={ROUTES.SIGN_IN}>Sign In</Header.Button>
            </Nav.Inner>
        </Nav>
    )
}