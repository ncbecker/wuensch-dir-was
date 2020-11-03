import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Button = styled.button`
  border: none;
  border-radius: 50%;
  background-color: lightblue;
  color: white;
  font-size: 2.5rem;
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

export default Button;

export function ButtonAdd({ btntext }) {
  return <Button>{btntext}</Button>;
}

ButtonAdd.propTypes = {
  btntext: PropTypes.string.isRequired,
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
