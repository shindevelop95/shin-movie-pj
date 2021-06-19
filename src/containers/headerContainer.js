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
                    <Header.TextLogo data-aos="fade-right" src="/images/landing/Welcome.png"/>
                    <Header.SubText data-aos="fade-right">Watch the largest collection of Movies and TV series anytime anywhere!</Header.SubText>
                    <Header.Button data-aos="fade-right">Go to Show</Header.Button>
                </Header.TextGroup>
                <Header.RightImg data-aos="fade-left" src="/images/landing/land-abs.png"/>
            </Header.Frame>
        </Header>
    )
}