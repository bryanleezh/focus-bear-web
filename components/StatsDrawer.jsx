'use client';

import React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from '@/components/ui/button';
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { profileStats } from '@/lib/data';

export default function StatsDrawer() {
    const [stats, setStats] = React.useState(350);
    const [averageStats, setAverageStats] = React.useState(0);

    const calculateStats = () => {
        var totalStats = 0;
        var numOfDays = 0;
        for (let dailyStats of profileStats) {
            numOfDays++;
            totalStats += dailyStats.stats;
        }
        var avgStats = totalStats/numOfDays;
        setAverageStats(avgStats.toFixed(2));
    }
   
    return (
      <Drawer>
        <DrawerTrigger asChild>
          <Button onClick={calculateStats}>Open Statistics</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Daily Statistics</DrawerTitle>
              <DrawerDescription>Focus time for the week</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">
                    {averageStats}
                  </div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                    Average Hours/day
                  </div>
                </div>
              </div>
              <div className="mt-3 h-[120px]">
                  <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={profileStats}>
                          <Bar
                              dataKey="stats"
                              label 
                              style={{
                                  fill: "hsl(var(--foreground))",
                                  opacity: 0.9,
                              }}
                          />
                      </BarChart>
                  </ResponsiveContainer>
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
}