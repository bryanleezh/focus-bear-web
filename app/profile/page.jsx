import React from 'react';
import NavBar from '@/components/NavBar';
import ProfileCard from '@/components/ProfileCard';
import WebView from '@/components/WebView';
import { getSelectorsByUserAgent} from 'react-device-detect';
import { headers } from 'next/headers';

const Profile = () => {
  const { isMobile } = getSelectorsByUserAgent(headers().get("user-agent") ?? "");

  return (
    <div>
      { (isMobile) ?
        <div>
          <ProfileCard currency={1257} />
          <NavBar />
        </div> 
      :
        <div>
          <WebView/>
        </div>
      }
      <NavBar />
    </div>
  )
}

export default Profile;