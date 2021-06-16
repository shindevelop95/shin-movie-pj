import React from 'react';
import { Container, Wrapper, Group, InnerGroup, Info, Text } from './styles/footer';

export default function Footer({children,...restProps}){
    return(
        <Container {...restProps}>
            {children}
        </Container>
    )
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