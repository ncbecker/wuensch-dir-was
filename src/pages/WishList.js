import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';

const ContainerWishList = styled.div`
  display: flex;
  justify-content: center;
`;

function WishList() {
  const { name } = useParams();

  return <ContainerWishList>WishList {name}</ContainerWishList>;
}

export default WishList;
