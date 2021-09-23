import styled, { keyframes } from 'styled-components/macro'

export const Item = styled.div`
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
    }
`;

export const Container = styled.div`
    margin:100px 0;
    @media(max-width:1000px){
        text-align: center;
        ${Item}:last-of-type h2 {
            margin-bottom:50px;
        }
    }
`;

export const Pane = styled.div`
    @media (max-width: 1000px){
        padding : 0 45px;
        text-align:center;
    }
`;

export const Title = styled.h1`
    font-size:5rem;
    line-height:1.1.%;
    margin-bottom:8px;
    text-align:start;
    width:60rem;
    margin-left:12rem;
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
    @media (max-width: 1000px){
        margin-left: initial;
        width:initial;
        margin-bottom: 2rem;
        text-align:center;
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
    font-size:2.5rem;
    font-weight:normal;
    line-height:1.5;
    width:55rem;
    text-align: start;
    margin-left:12rem;
    @media (max-width: 1000px){
        width:initial;
        margin-left:initial;
        text-align:center;
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
    height:50rem;
    animation: 1s ${fadeIn} ease-in;

    @media (max-width:1300px){
       height:40rem;
    }
`;
