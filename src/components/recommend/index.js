import React, { useState, useEffect } from 'react';
import { Container, Group,Header,Text,Frame, Title, Image, Button} from './styles/recommend';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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

Recommend.Text = function RecommendText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
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

Recommend.Header = function RecommendHeader({children,...restProps}){
    return <Header {...restProps}>{children}</Header>
}

Recommend.Button = function RecommendButton({children,...restProps}){
    const [like, setLike] = useState(true);
    return <Button like={like}
        onClick={() => setLike(!like)}
        {...restProps}
        >{like ? <FavoriteBorderIcon/> : <FavoriteIcon/>}</Button>
}

