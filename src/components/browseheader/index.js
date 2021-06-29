import React from 'react'
import {Background} from './styles/browseheader'
export default function BrowseHeader({bg = true, children, ...restProps}){
    return (
        <Background {...restProps}>
            {children}
        </Background>
    ) 
}