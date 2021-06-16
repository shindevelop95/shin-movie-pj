import React from 'react';
import { Container, OuterWrapper, Wrapper, Group, InnerGroup, Info, Text,Logo,WordLogo,LogoGroup } from './styles/footer';

export default function Footer({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Footer.Logo = function FooterLogo({children, ...restProps}){
    return<Logo {...restProps}/>
}

Footer.WordLogo = function FooterWordLogo({children, ...restProps}){
    return<WordLogo {...restProps}/>
}

Footer.LogoGroup = function FooterLogoGroup({children, ...restProps}){
    return<LogoGroup {...restProps}>{children}</LogoGroup>
}

Footer.OuterWrapper = function FooterOuterWrapper({children, ...restProps}){
    return<OuterWrapper {...restProps}>{children}</OuterWrapper>
}

Footer.Wrapper = function FooterWrapper({children, ...restProps}){
    return<Wrapper {...restProps}>{children}</Wrapper>
}

Footer.Group = function FooterGroup({children, ...restProps}){
    return<Group {...restProps}>{children}</Group>
}

Footer.InnerGroup = function FooterInnerGroup({children, ...restProps}){
    return<InnerGroup {...restProps}>{children}</InnerGroup>
}

Footer.Info = function FooterInfo({children, ...restProps}){
    return<Info {...restProps}>{children}</Info>
}

Footer.Text = function FooterText({children, ...restProps}){
    return<Text {...restProps}>{children}</Text>
}