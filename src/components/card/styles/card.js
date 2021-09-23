import styled from 'styled-components/macro'

export const Container = styled.div`
    
    margin: auto;
`;

export const Inner = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin-top: 8rem;
`;

export const Group = styled.div`
    background-color:#FFFFFF;
    box-shadow: 10px 10px 8px 0 rgba(0,0,0,0.3);
    padding:12rem 0;
    min-width:35rem;
    text-align:center;
    @media(max-width:1300px){
        margin:auto;
        margin-bottom: 2rem;
    }

    @media(max-width:700px){
        min-width:45rem;
    }
`;

export const Title = styled.h3`
    text-transform:uppercase;
    font-size:4rem;
`;

export const SubTitle = styled.h1`
    color:#FFC404;
    position:relative;
    font-size:5rem;
    span{
        color:#707070;
        font-weight: bold;
        font-size:2.5rem;
    }

    i{
        position: absolute;
        top:0;
        left:125px;
        font-size:2rem;
    }
`;

export const Text = styled.p`
    font-size:2.5rem;
    color:#707070;
    font-weight: bold;
`

export const Button = styled.button`
    margin-top:2rem;
    background-color:#FFFFFF;
    color:#FFC404;
    padding:10px 20px;
    font-size:2.5rem;
    border-radius:10px;
    border: 2px solid #FFC404;
    cursor: pointer;
    transition:.5s;

    &:hover{
        background-color:#FFC404;;
        color:#FFFFFF;
    }
`;