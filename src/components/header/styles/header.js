import styled from 'styled-components/macro'

export const Background = styled.div`
    /*background:linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55), rgba(0,0,0, 0.65)), url(${({ src }) => (src ? `../images/misc/${src}.png` : '../images/landing/land.jpg')}) top left / cover
    no-repeat;*/
    background:${({src}) => src? `url(../images/misc/${src}.jpg)})`
                                :`linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55), rgba(0,0,0, 0.65)), 
                                  url(../images/landing/land.jpg)})`};
    height:100vh;
    margin-bottom:100px;
    background-repeat: no-repeat;
    background-size:100%;
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

export const Picture = styled.button`
    background:url(${({src}) => src});
    background-size:contain;
    border:0;
    width:32px;
    height:32px;
    cursor:pointer;
`;

export const LinkGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

export const TextLink = styled.p`
    color:white;
    text-decoration:none;
    margin-right:30px;
    font-weight:${({active}) => (active === 'true' ? '700' : 'normal')};
    cursor:pointer;

    &:hover{
        font-weight:bold;
    }

    &:last-of-type{
        margin-right:0;
    }
`;

export const Dropdown = styled.div`
    display:none;
    background-color:black;
    position:absolute;
    padding:10px;
    width:100px;
    top:32px;
    right:10px;

    ${LinkGroup}:last-of-type ${TextLink}{
        cursor:pointer;
    }

    ${LinkGroup} {
        margin-bottom:10px;

        &:last-of-type{
            margin-bottom:0;
        }

        ${TextLink}, ${Picture}{
            cursor:default;
        }
    }

    p{
        font-size:12px;
        margin-bottom:0;
        margin-top:0;
    }
`;

export const Profile = styled.div`
    display:flex;
    align-items:center;
    margin-left:20px;
    position:relative;

    button{
        cursor:pointer;
    }

    &:hover > ${Dropdown}{
        display:flex;
        flex-direction:column;
    }
`
export const InnerFrame = styled(Container)`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`

export const TextLogo = styled.img`
    height:70px;
    margin-right:50px;
    object-fit:contain;
`;

export const Feature = styled(Container)`
    padding:150px 0 500px 0;
    flex-direction:column;
 
    width:40%;
   
    margin-left:7.7%;

    @media (max-width:1100px){
        display:none;
}
`;

export const FeatureCallOut = styled.h2`
    color:white;
    font-size:50px;
    line-height:normal;
    font-weight:bold;
    text-shadow:2px 2px 4px rgba(0,0,0,0.45);
    margin:0;
    margin-bottom:20px;
`;


export const Button = styled.button`
    background-color:transparent;
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

    @media (max-width:600px){
        width:300px;
       margin:0 auto;
    }
`;

export const PlayButton = styled(Button)`
    width:200px;
    margin-top:20px;
`

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

export const Text = styled.p`
    color:white;
    font-size:22px;
    margin:0;
    line-height:normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
`

export const Search = styled.div`
    display:flex;
    align-items:center;

    .MuiSvgIcon-root{
        color:white;
        cursor:pointer;
        background-color: transparent;
        border:0;
        width:16px;
    }

    @media (max-width:700px){
        display:none;
    }
`;

export const SearchInput = styled.input`
    background-color:#44444459;
    color:white;
    border:1px solid white;
    transition:width 0.5s;
    height:30px;
    font-size:14px;
    width:${({active}) => (active === true? '200px':'0')}
`


