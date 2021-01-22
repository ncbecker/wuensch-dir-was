import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import { BtnDelete } from '../components/Button';
import { getListById, deleteListById } from '../components/json-server/lists';
import { NavLinkAdd, NavLinkHomeBtn } from '../components/NavLink';

const ContainerWishList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid lightblue;
  width: 200px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 10px 20px lightblue;
`;

function WishList() {
  const { id } = useParams();
  const history = useHistory();
  const [list, setList] = useState(null);

  useEffect(async () => {
    const newList = await getListById(id);
    setList(newList);
  }, []);

  if (!list) {
    return <div>Loading...</div>;
  }

  const handleDelete = async () => {
    await deleteListById(id);
    history.push('/');
  };

  return (
    <ContainerWishList>
      <h3>{list.title}</h3>
      <div>
        {list.items.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </div>
      <NavLinkHomeBtn goHome="/" />
      <BtnDelete onClick={handleDelete} />
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
    </ContainerWishList>
  );
}

export default WishList;
