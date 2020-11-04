import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import WishListItem from '../components/WishListItem';
import { NavLinkAdd } from '../components/NavLink';

const ContainerWelcome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  a {
    color: black;
    text-decoration: none;
  }
`;

function Welcome() {
  return (
    <ContainerWelcome>
      <WishListItem title="User3" />
      <WishListItem title="User2" />
      <NavLinkAdd goAdd="/add">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </NavLinkAdd>
    </ContainerWelcome>
  );
}

// Welcome.propTypes = {
//   title: PropTypes.string.isRequired,
//   goWishList: PropTypes.string.isRequired,
// };

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

export default Welcome;
