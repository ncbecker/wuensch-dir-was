import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { postList } from '../components/json-server/lists';
import { NavLinkHomeBtn } from '../components/NavLink';

const ContainerAdd = styled.div`
  display: flex;
  justify-content: center;
`;

function Add() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  async function handleSubmit(event) {
    const newList = { title: value, items: [] };
    await postList(newList);
    event.preventDefault();
    setValue('');
  }

  return (
    <ContainerAdd>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <NavLinkHomeBtn goHome="/" />
      Add page
    </ContainerAdd>
  );
}

export default Add;
