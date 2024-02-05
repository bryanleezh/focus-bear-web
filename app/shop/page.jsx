import React from 'react';
import NavBar from '@/components/NavBar';
import FullShop from '@/components/FullShop';
import WebView from '@/components/WebView';
import { getSelectorsByUserAgent} from 'react-device-detect';
import { headers } from 'next/headers';

const Shop = () => {
  const { isMobile } = getSelectorsByUserAgent(headers().get("user-agent") ?? "");

  return (
    <div>
      { (isMobile) ?
        <div>
          <FullShop currency={1257}/>
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

export default Shop;