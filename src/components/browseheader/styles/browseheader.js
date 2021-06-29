import styled from 'styled-components/macro'
export const Background = styled.div`
    background: url(../images/misc/batman-landing.jpg);
                               
    height:100vh;
    width:100%;
    margin-bottom:100px;
    background-repeat: no-repeat;
    background-size:100%;
    
    @media (max-width:700px){
        max-height:280px;
        object-fit:contain;
        width:100%;
        margin-bottom:0;
        background-size:cover;
}
`;