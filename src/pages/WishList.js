import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';

const ContainerWishList = styled.div`
  display: flex;
  justify-content: center;
`;

function WishList() {
  const { id } = useParams();

  return <ContainerWishList>WishList {id}</ContainerWishList>;
}

export default WishList;
