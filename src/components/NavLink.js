import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const NavLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: lightblue;
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: fixed;
  bottom: 5px;
  right: 5px;
  svg {
    fill: white;
  }
`;

export default NavLink;

export function NavLinkAdd({ goAdd, children }) {
  return (
    <Link to={goAdd}>
      <NavLink>{children}</NavLink>
    </Link>
  );
}

NavLinkAdd.propTypes = {
  goAdd: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// Button.propTypes = {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary: PropTypes.bool,
//   /**
//    * What background color to use
//    */
//   backgroundColor: PropTypes.string,
//   /**
//    * How large should the button be?
//    */
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   /**
//    * Button contents
//    */
//   label: PropTypes.string.isRequired,
//   /**
//    * Button contents
//    */
//   title: PropTypes.string.isRequired,
//   /**
//    * Optional click handler
//    */
//   onClick: PropTypes.func,
// };
