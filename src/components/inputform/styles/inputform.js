import styled from 'styled-components/macro'

export const Container = styled.div`
    width:1200px;
    margin:180px auto;

    @media (max-width:600px){
        width:400px;
        display:flex;
        flex-direction: column;
    }
`

export const Text = styled.h2`
    font-size:25px;
    text-align: center;
    font-weight: normal;

    @media (max-width:600px){
       font-size:20px;
    }
`

export const Input = styled.input`
    width:75%;
    height:50px;
    border: 2px solid #FFC404;
    font-size:25px;
    margin:30px 15px;
    border-radius:10px;
    padding:5px 20px;

    &:focus{
        outline:none;
    }

    @media (max-width:600px){
       width:300px;
       margin:20px auto;
    }
    
`

export const Button = styled.button`
    background-color:#FFC404;
    color:#eee;
    font-size:25px;
    padding:14px 30px;
    border-radius:10px;
    border: 2px solid #FFC404;
    cursor: pointer;
    transition:.5s;

    &:hover{
        transform: scale(1.1);
    }
    @media (max-width:600px){
        width:300px;
       margin:0 auto;
    }
`