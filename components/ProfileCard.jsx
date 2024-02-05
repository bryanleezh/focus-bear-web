'use client';

import React from 'react';
import StatsDrawer from './StatsDrawer';
import { Clock7, Skull, Flame, ArrowBigRight } from 'lucide-react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import Link from 'next/link';
import { focusSessions } from '@/lib/data';
  
export default function ProfileCard(props)  {
    //  * currency is in props.currency
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <Avatar className="h-24 w-24 border-2 border-gray-200">
                    <AvatarImage alt="@shadcn" src="/profile-photo.jpg" />
                    <AvatarFallback>JW</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold">Jared Wiggins</h2>
                <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center space-x-2">
                        <Clock7 className="h-5 w-5" />
                        <span className="text-sm">100 Total Hours Focused</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Skull className="h-5 w-5" />
                        <span className="text-sm">3 Failed sessions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Flame className="h-5 w-5" />
                        <span className="text-sm">3 Focus Streak</span>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-sm mx-auto mt-8 flex justify-center">
                <StatsDrawer className="px-6 py-2 bg-black text-white rounded-lg"/>
            </div>
            <div className="w-full max-w-sm mx-auto mt-8">
                <div className="space-y-4">
                    {/* TODO: add data into this then do data.map */}
                    <div className="grid grid-cols-3 items-center gap-4 p-4 border rounded-lg">
                        <div className="col-span-2">
                            <div className="text-lg font-bold">Date: 01/01/2024</div>
                            <div className="text-sm">Time: 10:00 AM - 12:00 PM</div>
                        </div>
                        <Link className='flex items-center justify-center' href="/focus">
                            <ArrowBigRight className="h-5 w-5" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4 p-4 border rounded-lg">
                        <div className="col-span-2">
                            <div className="text-lg font-bold">Date: 02/01/2024</div>
                            <div className="text-sm">Time: 02:00 PM - 04:00 PM</div>
                        </div>
                        <Link className='flex items-center justify-center' href="/focus">
                            <ArrowBigRight className="h-5 w-5" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4 p-4 border rounded-lg">
                        <div className="col-span-2">
                            <div className="text-lg font-bold">Date: 03/01/2024</div>
                            <div className="text-sm">Time: 06:00 PM - 08:00 PM</div>
                        </div>
                        <Link className='flex items-center justify-center' href="/focus">
                            <ArrowBigRight className="h-5 w-5" />
                        </Link>
                    </div>
                </div>
            </div>
          </div>
        </section>
      )
    }