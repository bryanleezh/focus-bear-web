'use client';

import React from "react";
import Link from "next/link";

export default function DeskCollection() {
    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundImage: `url('/background2.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-white bg-opacity-50 dark:bg-gray-800 p-2 rounded-lg shadow-md">
                <img alt="Coin Icon" className="w-5 h-5" src="/coin.png" />
                <span className="text-sm font-bold">1257</span>
            </div>
            <div className="flex items-center justify-center" style={{ position: 'absolute', bottom: '150px' }}>
                <Link className="flex flex-col items-center" href="/shop">
                    <img alt="end button" src={`/decorate_button.svg`} width={256}/>
                </Link>
            </div>
        </div>
    )
}