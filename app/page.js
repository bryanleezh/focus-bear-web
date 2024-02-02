'use client';

import React from 'react';
import NavBar from "@/components/NavBar";
import ProgressTracker from '@/components/ProgressTracker';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <ProgressTracker currency={1257} />
      <NavBar />
    </div>
  );
}
