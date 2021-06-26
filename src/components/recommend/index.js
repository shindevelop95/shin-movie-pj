import React, { useState, useEffect } from 'react';
import { Container, Group, Frame, Title, Image} from './styles/recommend';

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

Recommend.Title = function RecommendTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Recommend.Image = function RecommendImage({children,...restProps}){
    return <Image {...restProps}/>
}