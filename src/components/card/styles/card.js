import styled from 'styled-components/macro'

export const Container = styled.div`
    width:90%;
    margin: auto;
`;

export const Inner = styled.div`
    display:flex;
    justify-content: space-between;
    margin-top: 80px;

    @media (max-width: 600px){
        flex-direction:column;
        align-items:center;
    }
`;

export const Group = styled.div`
    background-color:#FFFFFF;
    box-shadow: 10px 10px 8px 0 rgba(0,0,0,0.3);
    padding:120px 0;
    width:400px;
    text-align:center;
    @media (max-width: 600px){
        margin-bottom: 40px;
    }
`;

export const Title = styled.h3`
    text-transform:uppercase;
    font-size:40px;
`;

export const SubTitle = styled.h1`
    color:#FFC404;
    position:relative;
    font-size:50px;
    span{
        color:#707070;
        font-weight: bold;
        font-size:25px;
    }

    i{
        position: absolute;
        top:0;
        left:125px;
        font-size:20px;

    }
`;

export const Text = styled.p`
    font-size:25px;
    color:#707070;
    font-weight: bold;
`

export const Button = styled.button`
    margin-top:20px;
    background-color:#FFFFFF;
    color:#FFC404;
    padding:10px 20px;
    font-size:25px;
    border-radius:10px;
    border: 2px solid #FFC404;
    cursor: pointer;
    transition:.5s;

    &:hover{
        background-color:#FFC404;;
        color:#FFFFFF;
    }
`;