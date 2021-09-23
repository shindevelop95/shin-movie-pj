import styled from 'styled-components/macro';

export const Container = styled.div`
   background-color:black;
`;

export const Title = styled.div`
    background-color:black;
    color:#eee;
    font-size:5rem;
    text-align:center;
    font-weight:500;
    padding:5rem 0;
`;

export const Header = styled.h1`
    position:absolute;
    bottom:10%;
    left:50%;
    transform:translateX(-50%);
    margin:auto 0;
    color:#eee;
    text-align: center;
    font-size:1.8rem;
    z-index:1500;
    @media (max-width:700px){
      font-size:1rem;
    }
`;

export const Text = styled.p``;

export const Frame = styled.div`
    position:relative;
    width:30rem;
    margin-right:20px;
    transition:transform 450ms;
    &:hover{
            transform:scale(1.1);
        } 
    &:after{
            content:' ';
            position:absolute;
            bottom:0%;
            left:5%;
            background-color:rgba(0,0,0,.8);
            height:30%;
            width:90%;
        }
`;

export const Image = styled.img`
        object-fit: contain;
        width:30rem;
        max-height:40rem;
        position:relative;

        @media (max-width:700px){
            height:100px;
            width:80px;
    }
`

export const Group = styled.div`
    max-width:75%;
    overflow-x: scroll;
    margin:0 auto;
    display:flex;
    cursor:pointer;
    &::-webkit-scrollbar{
        display:none;
    }
`;

export const Button = styled.button`
    position:absolute;
    right:8%;
    bottom:18%;
    z-index:1500;
    background-color: transparent;
    border: none;

    .MuiSvgIcon-root{
        color:red;
        cursor:pointer;
        height:3.5rem;
        width:3.5rem;
    }

    .MuiSvgIcon-root:hover{
        color:#eee;
    }
    @media (max-width:700px){
       display:none;
    }
`;