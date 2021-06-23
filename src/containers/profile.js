import React from 'react';
import { Nav, Header, Footer,Profiles } from '../components';
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

            <Profiles>
                <Profiles.Title>Who's watching</Profiles.Title>
                <Profiles.List>
                    <Profiles.User 
                    onClick={() => 
                    setProfile({
                        displayName:user.displayName,
                        photoURL:user.photoURL
                    })}>
                        <Profiles.Picture src={user.photoURL}/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}