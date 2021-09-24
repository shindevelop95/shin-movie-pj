import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`;

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 50px;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.ul`

`;

export const Name = styled.p`
  color: #e5e5e5;
  text-overflow: ellipsis;
  font-size: 40px;
  text-transform: uppercase;
  width:300px;
  text-align:center;
  margin:auto;
  transition: all .5s;
  opacity:0;
`;

export const Picture = styled.img`
  height:30rem;
  object-fit: contain;
  cursor:pointer;
  transition: all .5s;
`;

export const Item = styled.li`
  list-style-type: none;
  text-align: center;
  margin-right: 30px;

  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:hover ${Name} {
    font-weight: bold;
    color: white;
    background-color:red;
    border-radius:10px;
    padding:15px 0;
    opacity:1;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;