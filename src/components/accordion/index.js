import React, {useState,useContext,createContext} from 'react'
import {Container,Title, Item, Inner, Header, Body} from './styles/accordian'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';


const ToggleContext = createContext();
export default function Accordion({children, ...restProps}){
    return (
        <Container {...restProps}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}

Accordion.Item = function AccordionItem({children, ...restProps}){
    const [toggleShow, setToggleShow] = useState(false);
    return <ToggleContext.Provider value={{toggleShow,setToggleShow}}>
                <Item {...restProps}>{children}</Item>
            </ToggleContext.Provider>
}

Accordion.Header = function AccordionHeader({children, ...restProps}){
    const {toggleShow, setToggleShow} = useContext(ToggleContext);
    return <Header onClick={() => setToggleShow((toggleshow => !toggleShow))} {...restProps}>
    {children}
    {toggleShow ? (<CancelIcon/>)
                : (<AddCircleIcon/>)}
    </Header>
}

Accordion.Body = function AccordionBody({children, ...restProps}){
    const {toggleShow} = useContext(ToggleContext);

    return toggleShow ? <Body {...restProps}>{children}</Body> : null;
}