'use client';

import React from 'react';
import NavBar from "@/components/NavBar";
import ProgressTracker from '@/components/ProgressTracker';

export default function Home() {
  return (
    <div>
      <ProgressTracker currency={1257} />
      <NavBar />
    </div>
  );
}
