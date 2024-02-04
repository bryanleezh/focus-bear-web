'use client';

import React from 'react';
import NavBar from '@/components/NavBar';
import ProfileCard from '@/components/ProfileCard';

const Profile = () => {
  return (
    <div>
        <ProfileCard currency={1257} />
        <NavBar />
    </div>
  )
}

export default Profile;