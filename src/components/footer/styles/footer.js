import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color: #000000;
    width:100%;
    padding:125px 0;
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
    margin-left:20px;
    line-height:1.5;
    font-size:20px;
`;

export const Text = styled.p`
    color:#FFF0BD;
    font-size:25px;
`;

export const LogoGroup = styled.div`
    display:flex;
    align-items:center;
    margin-bottom: 30px;

`;

export const Logo = styled.img`
    height:70px;
    width:70px;
    margin-right:20px;
`;

export const WordLogo = styled.img`
    height:80px;
`;