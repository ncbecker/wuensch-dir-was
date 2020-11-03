import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Container = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid lightblue;
  width: 200px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 10px 20px lightblue;
`;

export default function WishListItem({ title }) {
  return (
    <>
      <Container>{title}</Container>
    </>
  );
}

WishListItem.propTypes = {
  title: PropTypes.string.isRequired,
};
