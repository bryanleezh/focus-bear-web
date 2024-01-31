'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default function ProgressTracker() {

    const startTimer = () => {
        console.log("start stopwatch");
    }

    const resetTimer = () => {
        console.log("reset stopwatch");
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-mono">
                <span className="text-gray-500 dark:text-gray-400">00:</span>
                30{"\n                    "}
                <span className="text-gray-500 dark:text-gray-400">:</span>
                <span className="text-2xl">00</span>
              </div>
            </div>
            <div className="w-full max-w-md relative" style={{ backgroundColor: 'inherit' }}>
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: -1 }}>
                  <div className="bg-gray-100 dark:bg-gray-900 w-full h-full" />
                </div>
                <div className="flex justify-center">
                    <Image src={`/egg.png`} width="256" height="256" layout="fixed" />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <Button className="bg-blue-500 text-white" variant="outline" onClick={startTimer}>
                    Start
                </Button>
                <Button variant="destructive" onClick={resetTimer}>
                    Reset
                </Button>
            </div>
          </div>
        </div>
      )
}
