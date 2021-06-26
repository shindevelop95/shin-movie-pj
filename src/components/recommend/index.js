import React, { useState, useEffect } from 'react';
import { Container, Group, Frame } from './styles/recommend';

export default function Recommend({children,...restProps}){
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}


Recommend.Group = function RecommendGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

Recommend.Frame = function RecommendFrame({children,...restProps}){
    return <Frame {...restProps}>{children}</Frame>
}