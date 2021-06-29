import React, {useState, useEffect} from 'react';
import {Link as ReachRouterLink} from 'react-router-dom'  
import SearchIcon from '@material-ui/icons/Search';
import { Background, FrameGroup, FeatureGroup,Filter, InnerFrame,RightImg,Dropdown, Picture, PlayButton,TextLink,FeatureCallOut, LinkGroup, SubText,Container, Profile, TextGroup, InnerGroup, Group, Text, TextLogo, Button, Feature, Search, SearchInput} from './styles/header';

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

Header.InnerFrame = function HeaderInnerFrame({children,...restProps}){
    return <InnerFrame {...restProps}>{children}</InnerFrame>
}

Header.Filter = function HeaderFilter({children,...restProps}){
    
    return <Filter {...restProps}/>
}

Header.Filter = function HeaderFilter({children,...restProps}){
    
    return <Filter {...restProps}/>
}


Header.Profile = function HeaderProfile({children,...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Feature = function HeaderFeature({children,...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.Dropdown = function HeaderDropdown({children,...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.FeatureGroup = function HeaderFeatureGroup({children,...restProps}){
    return <FeatureGroup {...restProps}>{children}</FeatureGroup>
}

Header.LinkGroup = function HeaderLinkGroup({children,...restProps}){
    return <LinkGroup {...restProps}>{children}</LinkGroup>
}

Header.FrameGroup = function HeaderFrameGroup({children,...restProps}){
    return <FrameGroup {...restProps}>{children}</FrameGroup>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children,...restProps}){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.Picture = function HeaderPicture({src,...restProps}){
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}

Header.Text = function HeaderText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}

Header.TextLink = function HeaderTextLink({children,...restProps}){
    return <TextLink {...restProps}>{children}</TextLink>
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


Header.TextLogo = function HeaderTextLogo({to,...restProps}){
    return (
        <ReachRouterLink to={to}>
            <TextLogo {...restProps}/>
        </ReachRouterLink>
    )
}

Header.Button = function HeaderButton({to,children,...restProps}){
    return (<ReachRouterLink to={to}>
                <Button {...restProps}>{children}</Button>
            </ReachRouterLink>)
}

Header.PlayButton = function HeaderPlayButton({children,...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}
Header.RightImg = function HeaderRightImg({children,...restProps}){
    return <RightImg {...restProps}/>
}

Header.Search = function HeaderSearch({searchTerm,setSearchTerm,...restProps}){
    const [searchActive, setSearchActive] = useState(false);

    return <Search {...restProps}>    
                <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}/>
                <SearchInput
                    value={searchTerm}
                    onChange={({target}) => setSearchTerm(target.value)}
                    placeholder="Search for films"
                    active={searchActive}
                />
              
            </Search>
}