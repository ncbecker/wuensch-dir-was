import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import WishListItem from '../components/WishListItem';
import { NavLinkAdd } from '../components/NavLink';
import { getLists } from '../components/json-server/lists';

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
  const [lists, setLists] = useState(null);

  useEffect(async () => {
    const newLists = await getLists();
    setLists(newLists);
  }, []);

  return (
    <ContainerWelcome>
      <h3>My Wishlists</h3>
      {lists?.map((list) => (
        <WishListItem key={list.id} id={list.id} title={list.title} />
      ))}
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
