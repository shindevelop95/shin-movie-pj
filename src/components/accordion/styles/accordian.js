import styled, {keyframes} from 'styled-components/macro';

const slideIn = keyframes`
    0%{
        transform:translateY(-20%)
    }
    100%{
        transform:translateY(0)
        opacity:1
    }
`
export const Container = styled.div`
   margin: 100px 0;
   @media(max-width:600px){
        min-width:400px;
    }

`;

export const Item = styled.div`
    margin:0 auto 10px auto;
    width:80%;
    &::first-of-type{
        margin-top:3em;
    }

    @media (max-width:600px){
        width:350px;
    }
`;

export const Header = styled.div`
    display:flex;
    justify-content: space-between;
    cursor:pointer;
    margin-bottom:1px;
    font-size: 2.5rem;
    font-weight:normal;
    background:#FFF0BD;
    padding:0.8em 1.2em;
    user-select:none;
    align-items: center;
    z-index: 99;

    .MuiSvgIcon-root{
        color:#FFC404;
        width:30px;
        height:30px;
    }

  
`;

export const Body = styled.div`
    color:#707070;
    max-height:120rem;
    transition:max-height 0.25s cubic-beizer(0.5,0,0.1,1);
    font-size:2.5rem;
    font-weight:normal;
    line-height:normal;
    background:#FFF0BD;
    padding: 0.8em 2.2em 0.8em 1.2em;
    white-space: pre-wrap;
    user-select: none;
    animation: 0.3s ${slideIn} ease-in;

    @media (max-width:600px){
        font-size:16px;
        line-height:22px;
    }
`;

export const Inner = styled.div` 
`;

export const Title = styled.h1`
    font-size:5rem;
    line-height:1.1.%;
    margin-bottom:8rem;
    text-align: center;
    position:relative;

    &:after{
        content:"";
        position:absolute;
        width:10rem;
        height:3px;
        background-color:#FFC404;
        bottom: -10px;
        left:50%;
        transform:translateX(-50%);
    }

    @media (max-width:600px){
        font-size:25px;
    }
`;