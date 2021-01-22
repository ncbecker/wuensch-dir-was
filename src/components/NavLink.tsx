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
  bottom: 15px;
  right: 15px;
  svg {
    fill: white;
  }
`;
const NavLinkHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: lightblue;
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  left: 15px;
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

export function NavLinkHomeBtn({ goHome }) {
  return (
    <Link to={goHome}>
      <NavLinkHome>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      </NavLinkHome>
    </Link>
  );
}

NavLinkHomeBtn.propTypes = {
  goHome: PropTypes.string.isRequired,
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
