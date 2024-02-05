import React from 'react';
import WebView from '@/components/WebView';
import NavBar from '@/components/NavBar';
import { getSelectorsByUserAgent} from 'react-device-detect';
import { headers } from 'next/headers';

const Focus = () => {
  const { isMobile } = getSelectorsByUserAgent(headers().get("user-agent") ?? "");

  return (
    <div>
      { (isMobile) ?
        <div>
          <p>Focus Session Details</p>
          <NavBar />
        </div> 
      :
        <div>
          <WebView/>
        </div> 
      }
    </div>
  )
}

export default Focus