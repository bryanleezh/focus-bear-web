'use client';

import Link from "next/link";

export default function NavBar() {
  return (
    <div className="fixed bottom-0 w-full h-16 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 flex items-center justify-around">
      <Link className="flex flex-col items-center" href="/">
        <img alt="home" src={`/home1.svg`} width="36" height="36" />
        <span className="text-xs">Home</span>
      </Link>
      <Link className="flex flex-col items-center" href="/desk">
        <img alt="desk" src={`/gallery1.svg`} width="36" height="36" />
        <span className="text-xs">Desk</span>
      </Link>
      <Link className="flex flex-col items-center" href="/profile">
        <img alt="profile" src={`/profile1.svg`} width="36" height="36" />
        <span className="text-xs">Profile</span>
      </Link>
    </div>
  )
}