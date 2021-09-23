import styled from 'styled-components/macro'

export const Container = styled.div`
    max-width:80%;
    margin:180px auto;
`

export const Group = styled.div`
    width:80%;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 2rem auto;
`;

export const Text = styled.h2`
    font-size:2.5rem;
    text-align: center;
    font-weight: normal;
`

export const Input = styled.input`
    flex:1;
    height:6rem;
    border: 2px solid #FFC404;
    font-size:2.5rem;
    border-radius:10px;
    margin-right:2rem;
    padding:5px 20px;

    &:focus{
        outline:none;
    }
    
`

export const Button = styled.button`
    background-color:#FFC404;
    color:#eee;
    font-size:2.5rem;
    padding:1.2rem 3rem;
    border-radius:10px;
    border: 2px solid #FFC404;
    cursor: pointer;
    transition:.5s;

    &:hover{
        transform: scale(1.1);
    }
`