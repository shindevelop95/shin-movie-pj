import styled from 'styled-components/macro'

export const Container = styled.div`
    width:900px;
    margin:180px auto;

    @media (max-width:600px){
        width:500px;
        display:flex;
        flex-direction: column;
    }
`

export const Text = styled.h2`
    font-size:20px;
    text-align: center;
    font-weight: normal;

    @media (max-width:600px){
       font-size:20px;
    }
`

export const Input = styled.input`
    width:80%;
    height:35px;
    border: 2px solid #FFC404;
    margin:30px 15px;
    border-radius:10px;
    padding:5px 12px;

    @media (max-width:600px){
       width:400px;
       margin:20px auto;
    }
    
`

export const Button = styled.button`
    background-color:#FFC404;
    color:#eee;
    padding:10px 20px;
    border-radius:10px;
    border: 2px solid #FFC404;
    cursor: pointer;

    @media (max-width:600px){
        width:400px;
       margin:0 auto;
    }
`