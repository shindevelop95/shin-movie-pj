import React from 'react';
import {Container,Frame, Wrapper, Title,SubTitle,Text} from './styles/banner'

export default function Banner({children, ...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Banner.Frame = function BannerFrame({children, ...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}

Banner.Title = function BannerTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Banner.SubTitle = function BannerSubTitle({children, ...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Banner.Text = function BannerText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Banner.Wrapper = function BannerWrapper({children, ...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}