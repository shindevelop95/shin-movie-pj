import React from 'react'
import {Banner} from '../components'

export function BannerContainer(){
    return(
        <Banner>
            <Banner.Wrapper>
                <Banner.Frame>
                    <Banner.Title>Explore more and more exclusive movies with Miryu Premium</Banner.Title>
                    <Banner.SubTitle>10% OFF</Banner.SubTitle>
                    <Banner.Text>Only 45/month in the first year</Banner.Text>
                </Banner.Frame>
                <Banner.Frame>
                    <img src="./images/misc/long-banner.jpg"/>
                </Banner.Frame>
            </Banner.Wrapper>
        </Banner>
    )
}