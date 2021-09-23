import styled from "styled-components/macro";

export const Container = styled.div`
     margin:200px auto;
     width:85%;
    
`;

export const Group = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Inner = styled.div``;

export const Title = styled.h1`
    text-align: center;
    position:relative;
    margin-bottom: 5rem;
    font-size:5rem;
   
    
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
`;

export const Text = styled.span`
    display:flex;
    align-items: center;
    font-size:2.5rem;

    .MuiSvgIcon-root{
        color:#FFC404;
        width:5rem;
        height:5rem;
        margin-right:10px;
    }

`;

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-evenly;
    margin-bottom:18rem;

    @media (max-width: 900px){
        flex-direction:column;
        align-items:start;
    }
`;