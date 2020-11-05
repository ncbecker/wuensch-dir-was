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
    margin: 10px auto;
    display: block;
    text-align: center;
    height: 24px;
  }
  button {
    margin: 10px auto;
    display: block;
    border: none;
    background: none;
  }
`;
function Add() {
  const [formData, setFormData] = useState({ title: '', wish1: '' });
  const [inputName, setInputName] = useState(['wish1']);
  const [loading, setLoading] = useState(false);
  // const [errorMessage, setErrorMessage] = useState(null);

  function handleAddInput() {
    const inputNumber = inputName.length + 1;
    setInputName([...inputName, `wish${inputNumber}`]);
    const newKey = `wish${inputNumber}`;
    console.log(newKey);
    const newPair = {};
    newPair[newKey] = '';
    setFormData(Object.assign(formData, newPair));
    console.log(formData);
  }

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    setLoading(true);
    const { title, ...wishes } = formData;
    await postList({ title, items: Object.values(wishes) });
    event.preventDefault();
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
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          {inputName.map((item) => (
            <input
              key={item}
              type="text"
              placeholder="Wish"
              name={item}
              value={formData.item}
              onChange={handleChange}
            />
          ))}
          <button type="button" onClick={handleAddInput}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </button>
          <input type="submit" value="Let it snow!" />
        </form>
      </ContainerForm>
      {loading && <div>Loading...</div>}
      <NavLinkHomeBtn goHome="/" />
    </ContainerAdd>
  );
}

export default Add;
