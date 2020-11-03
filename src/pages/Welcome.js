import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WishListItem from '../components/WishListItem';
import { ButtonAdd } from '../components/Button';

const ContainerWelcome = styled.div`
  display: flex;
  justify-content: center;
  a {
    color: black;
    text-decoration: none;
  }
`;

function Welcome({ title, btntext }) {
  return (
    <ContainerWelcome>
      <Link to="/wishlist">
        <WishListItem title={title} />
      </Link>
      <Link to="/add">
        <ButtonAdd btntext={btntext} />
      </Link>
    </ContainerWelcome>
  );
}

// const Welcome = ({ title, btntext }) => (
//   <ContainerWelcome>
//     <Link to="/wishlist">
//       <WishListItem title={title} />
//     </Link>
//     <Link to="/add">
//       <ButtonAdd btntext={btntext} />
//     </Link>
//   </ContainerWelcome>
// );

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
  btntext: PropTypes.string.isRequired,
};

export default Welcome;
