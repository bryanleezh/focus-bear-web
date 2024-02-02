'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import FullShop from '@/components/FullShop';

const Shop = () => {
  return (
    <div>
      <FullShop currency={1257}/>
      <NavBar />
    </div>
  )
}

export default Shop;