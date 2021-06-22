import React from 'react';
import { Container, Inner } from './styles/nav';
export default function Nav({ children, ...restProps }) {
    return (
        <Container>
            {children}
        </Container>
    )
}

Nav.Inner = function NavInner({ children, ...restProps }) {
    return <Inner {...restProps}>{children}</Inner>
}