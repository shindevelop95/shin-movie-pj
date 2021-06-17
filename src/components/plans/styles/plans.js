import styled from "styled-components/macro";

export const Container = styled.div`
     margin:50px 0;
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
   
    
    &:after{
        content:"";
        position:absolute;
        width:100px;
        height:5px;
        background-color:#FFC404;
        bottom: -10px;
        left:50%;
        transform:translateX(-50%);
    }

`;

export const Text = styled.p`
    line-height:0.5px;
    display:flex;
    align-items: center;

    .MuiSvgIcon-root{
        color:#FFC404;
        margin-right:10px;
    }

`;

export const Wrapper = styled.div`
    display:flex;
    justify-content: space-evenly;

    @media (max-width: 600px){
        flex-direction:column;
        align-items:center;
    }
`;