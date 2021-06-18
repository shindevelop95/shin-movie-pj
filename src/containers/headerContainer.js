import React from 'react';
import {Header,Footer} from '../components'

export function HeaderContainer(){
    return(
        <Header>
            <Header.Frame>
            <Header.Group>
                <Footer.WordLogo src="/images/logo/miryu.png"/>
                <Header.InnerGroup>
                    <Footer.Logo src="/images/logo/logo.png"/>
                    <Header.Button>Sign In</Header.Button>
                </Header.InnerGroup>
            </Header.Group>
                <Header.TextGroup>
                    <Header.TextLogo src="/images/landing/Welcome.png"/>
                    <Header.SubText>Watch the largest collection of Movies and TV series anytime anywhere!</Header.SubText>
                    <Header.Button >Go to Show</Header.Button>
                </Header.TextGroup>
                <Header.RightImg src="/images/landing/land-abs.png"/>
            </Header.Frame>
        </Header>
    )
}