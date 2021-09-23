import styled from 'styled-components/macro'
export const Background = styled.div`
    background: url(../images/misc/batman-landing.jpg) no-repeat center;                        
    height:100vh;
    background-size:cover;
    @media (max-width:700px){
        max-height:280px;
        object-fit:contain;
        width:100%;
        margin-bottom:0;
        background-size:cover;
}
`;