import React, {useState, useContext, createContext} from 'react';
import {Container,Group,Title,SubTitle,Text,Feature,FeatureTitle,FeatureText,FeatureClose,Maturity,Content,Meta,Entities,Item,Image} from './styles/list'
export const FeatureContext = createContext();

export default function List({children,...restProps}){
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature,setItemFeature] = useState({});

    return (
        <FeatureContext.Provider
            value={{showFeature, setShowFeature, itemFeature, setItemFeature}}
        >
            <Container {...restProps}>{children}</Container>
        </FeatureContext.Provider>
    )
}

List.Group = function ListGroup({children,...restProps}){
    return <Group {...restProps}>{children}</Group>
}

List.Title = function ListTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>
}

List.SubTitle = function ListSubTitle({children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>
}

List.Meta = function ListMeta({children,...restProps}){
    return <Meta {...restProps}>{children}</Meta>
}

List.Text = function ListText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

List.Entities = function ListEntities({children,...restProps}){
    return <Entities {...restProps}>{children}</Entities>
}

List.Item = function ListItem({children,...restProps}){
    const {setShowFeature,setItemFeature} = useContext(FeatureContext);
    return (<Item 
                onClick={()=>{
                    setItemFeature();
                    setShowFeature(true);
                }}
                {...restProps}>
                {children}
                </Item>)
}

List.Image = function ListImage({...restProps}){
    return <Image {...restProps}/>
}