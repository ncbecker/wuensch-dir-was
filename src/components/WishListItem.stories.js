import React from 'react';
import WishListItem from './WishListItem';

export default {
  title: 'Wishlist/Item',
  parameters: { layout: 'centered' },
  component: WishListItem,
};

export const Standard = () => <WishListItem title="Nicolas" />;
