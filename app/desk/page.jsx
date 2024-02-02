'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import DeskCollection from '@/components/DeskCollection';

const Desk = () => {
  return (
    <div>
        <DeskCollection currency={1257} />
        <NavBar />
    </div>
  )
}

export default Desk;