import styled from 'styled-components/macro'

export const Item = styled.div`
    display:flex;
`

export const Inner = styled.div`
    display:flex;
    align-items:center;
    flex-direction:${({direction}) => direction};
    justify-content: space-between;;
    max-width:1200px;
    margin:auto;
    width:100%;

    @media (max-width:1000px){
        flex-direction:column;
    }
`;

export const Container = styled.div`
    @media(max-width:1000px){
        ${Item}:last-of-type h2 {
            margin-bottom:50px;
        }
    }
`;

export const Pane = styled.div`
    width:50%;
    padding:20px;

    @media (max-width: 1000px){
        width:100%;
        padding : 0 45px;
        text-align:center;
    }
`;

export const Title = styled.h1`
    font-size:35px;
    line-height:1.1.%;
    margin-bottom:8px;
    text-align:start;
    width:400px;
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
    font-size:20px;
    font-weight:normal;
    line-height:normal;
    width:400px;
    text-align: start;
    margin-left:120px;

    @media (max-width:600px){
        font-size:14px;
        text-align:center;
        margin:auto;
        margin-bottom:40px;
    }
`;



export const Image = styled.img`
    max-width:100%;
    height:auto;
`;
