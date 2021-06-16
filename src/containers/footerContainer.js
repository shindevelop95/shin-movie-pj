import React from 'react';
import {Footer} from '../components'
import MailIcon from '@material-ui/icons/Mail';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export function FooterContainer(){
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Group>
                    <Footer.InnerGroup>
                        <MailIcon/>
                        <Footer.Info>ContactUs@Miryuwatchus.com</Footer.Info>
                    </Footer.InnerGroup>
                    <Footer.InnerGroup>
                        <PhoneIphoneIcon/>
                        <Footer.Info>ContactUs@Miryuwatchus.com</Footer.Info>
                    </Footer.InnerGroup>
                    <Footer.InnerGroup>
                        <LocationOnIcon/>
                        <Footer.Info>ContactUs@Miryuwatchus.com</Footer.Info>
                    </Footer.InnerGroup>
                </Footer.Group>
                <Footer.Group>
                    <Footer.Text>FAQ</Footer.Text>
                    <Footer.Text>Invester Relation</Footer.Text>
                    <Footer.Text>Privacy</Footer.Text>
                    <Footer.Text>Speed Test</Footer.Text>
                </Footer.Group>
                <Footer.Group>
                    <Footer.Text>FAQ</Footer.Text>
                    <Footer.Text>Invester Relation</Footer.Text>
                    <Footer.Text>Privacy</Footer.Text>
                    <Footer.Text>Speed Test</Footer.Text>
                </Footer.Group>
                <Footer.Group>
                    <Footer.Text>FAQ</Footer.Text>
                    <Footer.Text>Invester Relation</Footer.Text>
                    <Footer.Text>Privacy</Footer.Text>
                    <Footer.Text>Speed Test</Footer.Text>
                </Footer.Group>
                <Footer.Group>
                    <Footer.Text>FAQ</Footer.Text>
                    <Footer.Text>Invester Relation</Footer.Text>
                    <Footer.Text>Privacy</Footer.Text>
                    <Footer.Text>Speed Test</Footer.Text>
                </Footer.Group>
            </Footer.Wrapper>
        </Footer>
    )
}