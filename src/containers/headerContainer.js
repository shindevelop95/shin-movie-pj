import React from 'react';
import { Header, Footer } from '../components'
import { NavContainer } from './navContainer'

export function HeaderContainer() {
    return (
        <Header>
            <Header.Frame>
                <NavContainer />
               <Header.TextGroupFrame>
               <Header.TextGroup>
                    <Header.TextLogo data-aos="fade-right" src="/images/landing/Welcome.png" />
                    <Header.SubText data-aos="fade-right">Watch the largest collection of Movies and TV series anytime anywhere!</Header.SubText>
                    <Header.Button marginTop={'2rem'} data-aos="fade-right">Go to Show</Header.Button>
                </Header.TextGroup>
               </Header.TextGroupFrame>
                <Header.RightImg data-aos="fade-left" src="/images/landing/land-abs.png" />
            </Header.Frame>
        </Header>
    )
}