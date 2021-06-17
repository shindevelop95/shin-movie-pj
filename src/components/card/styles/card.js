import styled from 'styled-components/macro'

export const Container = styled.div`
    width:85%;
    margin: auto;
`;

export const Inner = styled.div`
    display:flex;
    justify-content: space-evenly;
    margin-top: 80px;

    @media (max-width: 600px){
        flex-direction:column;
        align-items:center;
    }
`;

export const Group = styled.div`
    background-color:#FFFFFF;
    box-shadow: 10px 10px 8px 0 rgba(0,0,0,0.3);
    padding:60px;
    text-align:center;
    @media (max-width: 600px){
        margin-bottom: 40px;
    }

   
`;

export const Title = styled.h3`
    text-transform:uppercase;
`;

export const SubTitle = styled.h1`
    color:#FFC404;
    position:relative;
    span{
        color:#707070;
        font-weight:normal;
        font-size:20px;
    }

    i{
        position: absolute;
        top:0;
        left:15px;
        font-size:20px;

    }
`;

export const Text = styled.p``

export const Button = styled.button`
    margin-top:20px;
    background-color:#FFFFFF;
    color:#FFC404;
    padding:10px 20px;
    border-radius:10px;
    border: 2px solid #FFC404;
    cursor: pointer;
    transition:.5s;

    &:hover{
        background-color:#FFC404;;
        color:#FFFFFF;
    }
`;