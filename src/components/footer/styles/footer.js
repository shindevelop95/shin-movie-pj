import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color: #000000;
    width:100%;
    padding:12.5rem 0;
    @media(max-width:600px){
        min-width:400px;
    }
`;

export const OuterWrapper = styled.div`
    margin:auto;
    width:80%;
`;

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-between;

    @media (max-width:600px){
       flex-direction:column;
    }
`;

export const Group = styled.div`
     @media (max-width:600px){
       margin:20px 0;
    }
`;

export const InnerGroup = styled.div`
    display:flex;
    align-items: center;

    .MuiSvgIcon-root{
        color:#FFC404;
    }
`

export const Info = styled.span`
    color:#FFF0BD;
    margin-left:2rem;
    line-height:1.5;
    font-size:2.5rem;
`;

export const Text = styled.p`
    color:#FFF0BD;
    font-size:2rem;
`;

export const LogoGroup = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: 3rem;

`;

export const Logo = styled.img`
    height:7rem;;
    width:7rem;
    margin-right:2rem;
`;

export const WordLogo = styled.img`
    height:8rem;
`;