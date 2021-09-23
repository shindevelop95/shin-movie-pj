import styled from 'styled-components/macro'

export const Container = styled.div`
    background-color:black;
    
`;

export const Frame = styled.div`
    img{
        width:100%;
    }
    @media (max-width:700px){
        img{
            display:none;
        }
    }
  
`;

export const Title = styled.h2`
    color:#eee;
    font-size:4rem;
    @media (max-width:700px){
       font-size:35px;
       text-align: center;
    }
`;

export const SubTitle = styled.h1`
    font-size:55px;
    color:#FFC404;
    display:inline-block;
    @media (max-width:700px){
       font-size:45px;
       text-align: center;
       display:block;
    }
`;

export const Text = styled.span`
    color:#eee;
    margin-left:10px;
    @media (max-width:700px){
       font-size:15px;
       text-align:center;
    }
`;

export const Wrapper = styled.div`
    display:flex;
    padding:50px 0;
    margin:auto;
    width:78%;
    align-items:center;
    @media (max-width:700px){
       font-size:10px;
       text-align: center;
    }
`;
