import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { postList } from '../components/json-server/lists';
import { NavLinkHomeBtn } from '../components/NavLink';

const ContainerAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContainerForm = styled.div`
  input {
    margin: 10px;
  }
`;

function Add() {
  const [listTitle, setListTitle] = useState('');
  const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);

  function handleChange(event) {
    setListTitle(event.target.value);
  }

  async function handleSubmit(event) {
    setLoading(true);
    const newList = { title: listTitle, items: ['Bier', 'Koks'] };
    await postList(newList);
    event.preventDefault();
    setListTitle('');
    setLoading(false);
  }

  return (
    <ContainerAdd>
      <h3>Add a new wishlist!</h3>
      <ContainerForm>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={listTitle}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </ContainerForm>
      {loading && <div>Loading...</div>}
      <NavLinkHomeBtn goHome="/" />
    </ContainerAdd>
  );
}

export default Add;
