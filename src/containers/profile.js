import React from 'react';
import { Nav, Header, Footer } from '../components';
import * as ROUTES from '../constant/routes'


export function SelectProfileContainer({ user, setProfile }) {
    return (
        <>
            <Header.Frame>
                <Nav>
                    <Footer.WordLogo src="/images/logo/miryu.png" to={ROUTES.HOME} alt="Miryu" />
                    <Nav.Inner>
                        <Footer.Logo src="/images/logo/logo.png" />
                        <Header.Button>Sign In</Header.Button>
                    </Nav.Inner>
                </Nav>
            </Header.Frame>
        </>
    )
}