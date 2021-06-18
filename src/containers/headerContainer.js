import React from 'react';
import {Header,Footer} from '../components'

export function HeaderContainer(){
    return(
        <Header>
            <Header.Group>
                <Footer.WordLogo src="/images/logo/miryu.png"/>
                <Header.InnerGroup>
                    <Footer.Logo src="/images/logo/logo.png"/>
                    <Header.Button>Sign In</Header.Button>
                </Header.InnerGroup>
            </Header.Group>
            <Header.Group>
                <Header.TextGroup>
                    <Header.Text>Welcome to</Header.Text>
                    <Footer.WordLogo src="/images/logo/miryu.png"/>
                    <Header.SubText>Watch the largest collection of Movies and TV series anytime anywhere!</Header.SubText>
                </Header.TextGroup>
            </Header.Group>
        </Header>
    )
}