import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Button = styled.button`
  border: none;
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  bottom: 15px;
  svg {
    fill: red;
    width: 36px;
    height: 36px;
  }
`;

export default Button;

export function BtnDelete(props) {
  return (
    <Button {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
      </svg>
    </Button>
  );
}

Button.defaultProps = {
  type: 'button',
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
