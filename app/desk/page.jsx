import React from 'react';
import NavBar from '@/components/NavBar';
import DeskCollection from '@/components/DeskCollection';
import WebView from '@/components/WebView';
import { getSelectorsByUserAgent} from 'react-device-detect';
import { headers } from 'next/headers';

const Desk = () => {
  const { isMobile } = getSelectorsByUserAgent(headers().get("user-agent") ?? "");

  return (
    <div>
      { (isMobile) ?
        <div>
          <DeskCollection currency={1257} />
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

export default Desk;