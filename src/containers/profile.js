import React from 'react';
import { Nav, Header, Footer,Profiles } from '../components';
import * as ROUTES from '../constant/routes'


export function SelectProfileContainer({ user, setProfile }) {
    return (
        <Header>
            <Header.Frame>
                <Nav>
                    <Footer.Logo src="/images/logo/logo.png" />
                    <Footer.WordLogo src="/images/logo/miryu.png" to={ROUTES.HOME} alt="Miryu" />
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
                        <Profiles.Picture/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </Header>
    )
}