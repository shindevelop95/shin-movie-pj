import styled from 'styled-components/macro'

export const Container = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
       @media (max-width:700px){
       display:none;
}
`

export const Inner = styled.div`
     display:flex;
    align-items: center;
 
`