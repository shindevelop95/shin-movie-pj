import styled, { keyframes } from 'styled-components/macro'

export const Item = styled.div`
    @media(max-width:600px){
        min-width:400px;
    }
`

export const Inner = styled.div`
    width:90%;
    display:flex;
    justify-content: space-around;
    align-items:center;
    flex-direction:${({ direction }) => direction};
    margin:auto;
    

    @media (max-width:1000px){
        flex-direction:column;
        width:100%;
    }
`;

export const Container = styled.div`
    margin:100px 0;
    @media(max-width:1000px){
        ${Item}:last-of-type h2 {
            margin-bottom:50px;
        }
    }
`;

export const Pane = styled.div`
    @media (max-width: 1000px){
        width:100%;
        padding : 0 45px;
        text-align:center;
    }
`;

export const Title = styled.h1`
    font-size:50px;
    line-height:1.1.%;
    margin-bottom:8px;
    text-align:start;
    width:600px;
    margin-left:120px;
    position:relative;

    &:after{
        content:'';
        position: absolute;
        bottom:-15%;
        left:0%;
        height:3px;
        width:100px;
        background-color: #FFC404;
    }
    @media (max-width: 600px){
        font-size:35px;
        text-align:center;
        margin:auto;
        margin-bottom:40px;
        margin-top: 40px;
        width:300px;

        &:after{
        content:'';
        position: absolute;
        bottom:-15%;
        left:50%;
        transform:translateX(-50%);
        height:3px;
        width:100px;
        background-color: #FFC404;
    }
}
`;

export const SubTitle = styled.h2`
    color:rgba(0,0,0,.65);
    font-size:25px;
    font-weight:normal;
    line-height:1.5;
    width:600px;
    text-align: start;
    margin-left:120px;

    @media (max-width:600px){
        font-size:14px;
        text-align:center;
        margin:auto;
        margin-bottom:40px;
        width:300px;
    }
`;

const fadeIn = keyframes`
    0%{
       opacity:0;
    }
    100%{
        opacity:1
    }`

export const Image = styled.img`
    object-fit: contain;
    height:500px;
    animation: 1s ${fadeIn} ease-in;

    @media (max-width:600px){
       height:300px;
    }
`;
