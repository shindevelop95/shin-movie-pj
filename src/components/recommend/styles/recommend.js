import styled from 'styled-components/macro';

export const Container = styled.div`
   background-color:black;
`;

export const Title = styled.div`
    background-color:black;
    color:#eee;
    font-size:50px;
    text-align:center;
    font-weight:500;
    padding:50px 0;
`;

export const Frame = styled.div``;

export const Image = styled.img`
        object-fit: contain;
        width:100%;
        max-height:400px;
        margin-right:30px;
        transition:transform 450ms;
        position:relative;

        &:hover{
            transform:scale(1.1);
        }
`

export const Group = styled.div`
    max-width:70%;
    overflow-x: scroll;
    margin:0 auto;
    display:flex;
    padding:20px;
    overflow-y: hidden;
    cursor:pointer;

    &::-webkit-scrollbar{
        display:none;
    }
`;