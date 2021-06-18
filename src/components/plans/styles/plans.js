import styled from "styled-components/macro";

export const Container = styled.div`
     margin:200px auto;
     width:85%;
     @media(max-width:600px){
       min-width:400px;
    }
`;

export const Group = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Inner = styled.div``;

export const Title = styled.h1`
    text-align: center;
    position:relative;
    margin-bottom: 50px;
    font-size:50px;
   
    
    &:after{
        content:"";
        position:absolute;
        width:100px;
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
    font-size:25px;

    .MuiSvgIcon-root{
        color:#FFC404;
        width:50px;
        height:50px;
        margin-right:10px;
    }

`;

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-evenly;
    margin-bottom:180px;

    @media (max-width: 600px){
        flex-direction:column;
        align-items:center;
    }
`;