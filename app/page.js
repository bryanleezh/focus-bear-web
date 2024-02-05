import React from 'react';
import NavBar from "@/components/NavBar";
import ProgressTracker from '@/components/ProgressTracker';
import { getSelectorsByUserAgent} from 'react-device-detect';
import { headers } from 'next/headers';
import WebView from '@/components/WebView';

export default function Home() {
  const { isMobile } = getSelectorsByUserAgent(headers().get("user-agent") ?? "");

  return (
    <div>
      { (isMobile) ?
        <div>
          <ProgressTracker currency={1257} />
          <NavBar />
        </div> 
      :
        <div>
          <WebView/>
        </div> 
      }
    </div>
  );
}
