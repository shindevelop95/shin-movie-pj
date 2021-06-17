import React from 'react'
import { Container,Inner,Group,Title,SubTitle,Text,Button } from './styles/card'

export default function Card({children,...restProps}){
    return(
        <Container>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Card.Group = function CardGroup ({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Card.Title = function CardTitle ({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle ({children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

Card.Text = function CardText ({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Card.Button = function CardButton ({children,...restProps}){
    return <Button {...restProps}>{children}</Button>
}