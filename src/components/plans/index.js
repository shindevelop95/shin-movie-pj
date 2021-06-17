import React from 'react'
import { Container,Inner,Title,Text,Group,Wrapper} from './styles/plans'
export default function Plans({children, ...restProps}){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Plans.Title = function PlansTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Plans.Text = function PlansText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Plans.Group = function PlansGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Plans.Wrapper = function PlansWrapper({children,...restProps}){
    return <Wrapper {...restProps}>{children}</Wrapper>
}


