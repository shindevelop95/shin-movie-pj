import styled from 'styled-components/macro'

export const Background = styled.div`
    background:linear-gradient(to bottom, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55), rgba(0,0,0, 0.65)), url(../images/landing/land.jpg) no-repeat center;
    height:100vh;
    background-size:cover;

    @media (max-width:1000px){
     
}
`;

export const Filter = styled.span`
    position:absolute;
    background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.80),
    black
  );
    height:30rem;
    width:100%;
    z-index:20;
    bottom:0rem;
    @media (max-width:1100px){
       display:none;
}
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
    width:5rem;
    height:5rem;
    cursor:pointer;
`;

export const LinkGroup = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`;

export const TextLink = styled.p`
    color:#eee;
    text-decoration:none;
    margin-right:3rem;
    font-size:3rem;
    border-bottom:${({active}) => (active === 'true' ? '3px solid #FFC404':'none')};
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
    margin-left:2rem;
    position:relative;

    button{
        cursor:pointer;
    }

    &:hover > ${Dropdown}{
        display:flex;
        flex-direction:column;
    }
`
export const InnerFrame = styled.div`
    position:sticky;
    background-color:${({show}) => (show  ? 'rgba(0,0,0,.7)' : 'transparent')};
    width:100%;
    top:0;
    z-index:20000;
    padding:0 20px;
  `
export const FrameGroup = styled.div`
    padding:1rem 2rem;
    justify-content:space-between;
    align-items:center;
    display:flex;
`;

export const TextLogo = styled.img`
    height:${({height}) => height ? height : '12rem'};
    margin-right:5rem;
    object-fit:contain;
    @media (max-width:1000px){
       display:none;
}
`;


export const Feature = styled.div`
   /* padding:150px 0 500px 0;
    flex-direction:column;
    width:40%;
    margin-left:7.7%;
  
   @media (max-width:700px){
        margin:auto;
        padding:initial;
        width:80%;
   }*/
`;

export const FeatureGroup = styled.div`
    position:absolute;
    max-width:45%;
    top:25%;
    left:10%;
    @media (max-width:1000px){
        text-align:center;
        top:initial;
        max-width:initial;
        left:50%;
        transform:translateX(-50%);
    }
`;



export const FeatureCallOut = styled.h2`
    color:white;
    font-size:6rem;
    line-height:normal;
    font-weight:bold;
    text-shadow:2px 2px 4px rgba(0,0,0,0.45);
    margin:0;
    margin-bottom:2rem;
    @media (max-width:1300px){
       font-size:4rem
    }
`;


export const Button = styled.button`
    background-color:transparent;
    color:#FFC404;
    padding:10px 20px;
    font-size:3rem;
    border-radius:10px;
    border: 2px solid #FFC404;
    cursor: pointer;
    transition:.5s;
    margin-top: ${({marginTop}) => marginTop? marginTop : '0'};
    &:hover{
        background-color:#FFC404;;
        color:#FFFFFF;
    }
 
   
`;

export const PlayButton = styled(Button)`
    width:30rem;
    font-size:3rem;
    margin-top:2rem;

    @media (max-width:1300px){
        width:20rem;
        font-size:2rem;
    }

    @media (max-width:700px){
        margin:auto;
        display:block;
   }
`

export const SubText = styled.p`
    color:rgba(255,255,255,.75);
    font-size:3.5rem;
    width:60rem;
`;



export const TextGroup = styled.div`
    margin-top:30rem;
    @media (max-width:1300px){
        margin-top:7rem;
    }
    @media (max-width:1000px){
        text-align:center;
}
`;

export const TextGroupFrame = styled.div`
    display:flex;
    flex-direction:column;
     @media (max-width:1000px){
       justify-content:center;
       align-items:center;
       transform:translateY(50%);
}
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
    height:100rem;

    @media (max-width:1300px){
        height:80rem;
        top:-5%;
}
    @media (max-width:1100px){
            height:70rem;
            top:-1%;
    }
    @media (max-width:1000px){
          display:none;
    }
   
`;

export const Text = styled.p`
    color:white;
    font-size:3.2rem;
    margin:3rem 0;
    line-height:normal;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.45);
    @media (max-width:1300px){
       font-size:2rem
    }
`

export const Search = styled.div`
    display:flex;
    align-items:center;
   
    .MuiSvgIcon-root{
        color:white;
        cursor:pointer;
        background-color: transparent;
        border:0;
        width:5rem;
        height:5rem;
        transition:.5s;
    }

    &:hover .MuiSvgIcon-root{
        color:#FFC404;
        transform:scale(1.1);
    }
  

    @media (max-width:700px){
        display:none;
    }
`;

export const SearchInput = styled.input`
    background-color:#44444459;
    color:black;
    border:1px solid white;
    font-size:40px;
    padding:5px;
    transition:width 0.5s;
    height:40px;
    font-size:20px;
    width:${({active}) => (active === true? '300px':'0')};
    opacity:${({active}) => (active === true? '1':'0')};

    &:focus{
        background-color:#FFF08D;
        outline:none;
    }
`


