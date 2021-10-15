import styled from 'styled-components/macro'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-color:rgba(0,0,0,0.75);
    border-radius:5px;
    box-sizing:border-box;
    margin:auto;
    max-width:40%;
    padding:6.5rem 4rem;
  

`;

export const Error = styled.div`
    background:#e87c03;
    border-radius:4px;
    font-size:14px;
    margin:0 0 16px;
    color:white;
    padding:15px 20px;
`;

export const Base = styled.form`
    display:flex;
    flex-direction:column;
   
    width:100%;
`;

export const Title = styled.h1`
    color:#FFC404;
    font-size:3rem;
    font-weight:bold;
    margin-bottom:2.8rem;
    text-align: center;
    text-transform: uppercase;
`;

export const Text = styled.p`
    color:#737373;
    font-size:1.6rem;
    font-weight:500;
`;

export const TextSmall = styled.p`
    margin-top:10px;
    font-size:1.3rem;
    line-height:normal;
    color:#8c8c8c;
`;

export const Link = styled(ReachRouterLink)`
    color:white;
    text-decoration:none;

    &:hover{
        text-decoration:underline;
    }
`

export const Input = styled.input`
    background:#333;
    border-radius:4px;
    border:0;
    color:white;
    height:4rem;
    padding:.5rem 2rem;
    margin-bottom:2rem;
    font-size:2rem!important;
    ::-webkit-input-placeholder{
        font-size:1.8rem;
    }

    &:last-of-type{
        margin-bottom:30px;
    }
`;

export const Submit = styled.button`
    background-color:transparent;
    color:#FFC404;
    padding:1rem 2rem;
    font-size:2rem;
    border-radius:10px;
    border: 2px solid #FFC404;
    cursor: pointer;
    transition:.5s;
    margin-bottom:2rem;

    &:hover{
        background-color:#FFC404;;
        color:#FFFFFF;
    }

    @media (max-width:600px){
        width:300px;
       margin:0 auto;
    }
    &:disabled{
        opacity:0.5s;
    }
`;