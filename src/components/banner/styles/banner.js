import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color:black;
`;

export const Wrapper = styled.div`
    display:flex;
    padding:50px 0;
    margin:auto;
    width:82%;
    align-items:center;
    @media (max-width:900px){
        flex-wrap:wrap-reverse;
        text-align: center;
    }
`;

export const Frame = styled.div`
    img{
        max-width:100%;
    }
    @media (max-width:900px){
       margin-bottom: 2rem;
    }
`;

export const Title = styled.h2`
    color:#eee;
    font-size:4rem;
`;

export const SubTitle = styled.h1`
    font-size:5.5rem;
    color:#FFC404;
    display:inline-block;
`;

export const Text = styled.span`
    color:#eee;
    font-size:1.6rem;
    margin-left:10px;
`;


