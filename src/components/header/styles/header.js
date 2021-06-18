import styled from 'styled-components/macro'

export const Background = styled.div`
    display:flex;
    flex-direction:column;
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/landing/land.jpg')}) top left / cover
    no-repeat;

`;

export const Container = styled.div``;

export const Group = styled.div`
    margin:20px auto;
    width:85%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.img``;

export const Text = styled.h3``;

export const Button = styled.button`
    background-color:#FFC404;
    color:#eee;
    padding:10px 20px;
    border-radius:10px;
    border: 2px solid #FFC404;
    cursor: pointer;

    @media (max-width:600px){
        width:300px;
       margin:0 auto;
    }
`;

export const SubText = styled.p``;

export const TextGroup = styled.div``;

export const InnerGroup = styled.div`
    display:flex;
    align-items: center;
`;

