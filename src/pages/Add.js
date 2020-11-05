import React from 'react';
import styled from 'styled-components/macro';
import { NavLinkHomeBtn } from '../components/NavLink';

const ContainerAdd = styled.div`
  display: flex;
  justify-content: center;
`;

function Add() {
  return (
    <ContainerAdd>
      <NavLinkHomeBtn goHome="/" />
      Add page
    </ContainerAdd>
  );
}

export default Add;
