import React, {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom'  
import SearchIcon from '@material-ui/icons/Search';

import { Background, Filter, InnerFrame,RightImg,Dropdown, Picture, PlayButton,TextLink,FeatureCallOut, LinkGroup, SubText,Container, Profile, TextGroup, InnerGroup, Group, Text, TextLogo, Button, Feature, Search, SearchInput} from './styles/header';

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


Header.Profile = function HeaderProfile({children,...restProps}){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Feature = function HeaderFeature({children,...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}

Header.Dropdown = function HeaderDropdown({children,...restProps}){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.LinkGroup = function HeaderLinkGroup({children,...restProps}){
    return <LinkGroup {...restProps}>{children}</LinkGroup>
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


Header.TextLogo = function HeaderTextLogo({children,...restProps}){
    return <TextLogo {...restProps}/>
}

Header.Button = function HeaderButton({children,...restProps}){
    return <Button {...restProps}>{children}</Button>
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
                    placeholder="Searcg films and series"
                    active={searchActive}
                />
              
            </Search>
}