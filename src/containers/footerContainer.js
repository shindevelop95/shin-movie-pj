import React from 'react';
import {Footer} from '../components'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export function FooterContainer(){
    return (
        <Footer>
            <Footer.OuterWrapper>
            <Footer.LogoGroup>
                    <Footer.Logo src="/images/logo/logo.png"/> 
                    <Footer.WordLogo src="/images/logo/miryu.png"/> 
                </Footer.LogoGroup>
            <Footer.Wrapper>
                <Footer.Group>
                    <Footer.InnerGroup>
                        <MailIcon/>
                        <Footer.Info>ContactUs@Miryuwatchus.com</Footer.Info>
                    </Footer.InnerGroup>
                    <Footer.InnerGroup>
                        <PhoneIphoneIcon/>
                        <Footer.Info>(+65) 1233 8765 9997</Footer.Info>
                    </Footer.InnerGroup>
                    <Footer.InnerGroup>
                        <LocationOnIcon/>
                        <Footer.Info>01 AZT Suit #4,Crystal Miryu</Footer.Info>
                    </Footer.InnerGroup>
                </Footer.Group>
                <Footer.Group>
                    <Footer.Text>FAQ</Footer.Text>
                    <Footer.Text>Invester Relation</Footer.Text>
                    <Footer.Text>Privacy</Footer.Text>
                    <Footer.Text>Speed Test</Footer.Text>
                </Footer.Group>
                <Footer.Group>
                    <Footer.Text>Help Centre</Footer.Text>
                    <Footer.Text>Jobs</Footer.Text>
                    <Footer.Text>Cookie Preferences</Footer.Text>
                    <Footer.Text>Legal Notices</Footer.Text>
                </Footer.Group>
                <Footer.Group>
                    <Footer.Text>Account</Footer.Text>
                    <Footer.Text>Ways to Watch</Footer.Text>
                    <Footer.Text>Corporate information</Footer.Text>
                    <Footer.Text>Netflix Originals</Footer.Text>
                </Footer.Group>
                <Footer.Group>
                    <Footer.Text>Media Centre</Footer.Text>
                    <Footer.Text>Terms of Use</Footer.Text>
                    <Footer.Text>Contact Us</Footer.Text>
                   
                </Footer.Group>
            </Footer.Wrapper>
            </Footer.OuterWrapper>
        </Footer>
    )
}