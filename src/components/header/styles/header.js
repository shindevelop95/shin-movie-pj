import styled from 'styled-components/macro'

export const Background = styled.div`
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55), rgba(0,0,0, 0.65)), url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/landing/land.jpg')}) top left / cover
    no-repeat;
    height:100vh;
    margin-bottom:100px;
`;

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    width:85%;
    margin:0 auto;
`;

export const Group = styled.div`
    width:100%;
    display:flex;
    justify-content: space-between;
    align-items: center;
`;


export const TextLogo = styled.img`
`;

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

export const SubText = styled.p`
    color:rgba(255,255,255,.75);
    font-size:25px;
    width:600px;
`;

export const TextGroup = styled.div`
    margin-top:300px;
`;

export const InnerGroup = styled.div`
    display:flex;
    align-items: center;
`;

export const RightImg = styled.img`
    position:absolute;
    object-fit: contain;
    top:-15%;
    right:10%;
    height:1000px;
   
`;