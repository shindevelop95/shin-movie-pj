import React from 'react';
import {Link as ReactRouterLink} from 'react-router-dom'  
import { Background, SubText,Container, TextGroup,InnerGroup,Group, Logo, Text, Button} from './styles/header';

export default function Header({bg = true, children, ...restProps}){
    return bg ? (
        <Background data-testid="header-bg" {...restProps}>
            {children}
        </Background>
    ) : (
        children
    )
}

Header.Frame = function HeaderFrame({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}


Header.Group = function HeaderGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Header.SubText = function HeaderSubText({children,...restProps}){
    return <SubText {...restProps}>{children}</SubText>
}

Header.TextGroup = function HeaderTextGroup({children,...restProps}){
    return <TextGroup {...restProps}>{children}</TextGroup>
}

Header.InnerGroup = function HeaderInnerGroup({children,...restProps}){
    return <InnerGroup {...restProps}>{children}</InnerGroup>
}

Header.Logo = function HeaderLogo({children,...restProps}){
    return <Logo {...restProps}>{children}</Logo>
}

Header.Text = function HeaderText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.Button = function HeaderButton({children,...restProps}){
    return <Button {...restProps}>{children}</Button>
}