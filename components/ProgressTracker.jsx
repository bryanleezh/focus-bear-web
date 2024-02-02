'use client';

import React from "react";

export default function ProgressTracker(props) {
    const [completeFocus, setCompleteFocus] = React.useState(false);
    const [isHatched, setIsHatched] = React.useState(false);
    const [isClaimed, setIsClaimed] = React.useState(false);
    const [isFailHatch, setIsFailHatch] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const [time, setTime] = React.useState({ hours: 0, minutes: 0, seconds: 0 });

    const startFocus = () => {
        setIsFocused(true);
        startTimer();
    }

    const endFocus = () => {
        setIsFocused(false);
        setCompleteFocus(true);
        clearInterval(intervalRef.current);

        // * Check progress
        console.log(time);
        if (time.hours > 0 || time.minutes >= 15) {
            // hatch successful
            setIsHatched(true);
        }
        else if (time.hours === 0 && time.minutes < 15) {
            // hatch fail
            setIsFailHatch(true);
        }
        // ! Reset time
        setTime({ hours: 0, minutes: 0, seconds: 0 })
    }

    const claimReward = () => {
        setIsClaimed(true);
    }

    // reset to initial state
    const resetFocus = () => {
        setIsHatched(false);
        setIsFailHatch(false);
        setCompleteFocus(false);
        setIsClaimed(false);
        setTime({ hours: 0, minutes: 0, seconds: 0 });
    }

    const startTimer = () => {
        const intervalId = setInterval(() => {
            setTime(prevTime => {
                const newSeconds = prevTime.seconds === 59 ? 0 : prevTime.seconds + 1;
                const newMinutes = prevTime.seconds === 59 ? prevTime.minutes + 1 : prevTime.minutes;
                const newHours = prevTime.minutes === 59 && prevTime.seconds === 59 ? prevTime.hours + 1 : prevTime.hours;
                return {hours: newHours, minutes: newMinutes, seconds: newSeconds };
            });
        }, 1000);
        intervalRef.current = intervalId;
    }

    const intervalRef = React.useRef();

    React.useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundImage: `url('/background1.svg')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white bg-opacity-50 dark:bg-gray-800 p-2 rounded-lg shadow-md">
                <img alt="Coin Icon" className="w-5 h-5" src="/coin.png" />
                <span className="text-sm font-bold">{props.currency}</span>
            </div>
            {/* conditional render here */}
            {completeFocus ? 
                // conditional render fail or no fail
                (
                    <div className="flex flex-col items-center gap-4">
                        {isFailHatch && (
                            // failed hatch
                            <div>
                                <div className="w-full max-w-md relative" style={{ backgroundColor: 'inherit' }}>
                                    <div className="flex justify-center">
                                        <img alt="dead egg" src={`/egg_dead.svg`} className="rounded-lg" width={188} />
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <img onClick={resetFocus} alt="failed chat bubble" src={`/failed_chat_bubble.svg`} width={300}/>
                                </div>
                            </div>
                        )}
                        {isHatched && (
                            // successful hatch
                            <div>
                                {isClaimed ? 
                                    // true
                                    <div>
                                        <div className="w-full max-w-md relative" style={{ backgroundColor: 'inherit' }}>
                                            <div className="flex justify-center">
                                                <img alt="slime" src={`/slime.svg`} className="rounded-lg" width={188} />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <img onClick={resetFocus} alt="successful hatch bubble" src={`/success_hatch_bubble.svg`} width={300}/>
                                        </div>
                                    </div>
                                : 
                                    // false
                                    <div>
                                        <div className="w-full max-w-md relative" style={{ backgroundColor: 'inherit' }}>
                                            <div className="flex justify-center">
                                                <img alt="slime" src={`/egg_hatched.svg`} className="rounded-lg" width={188} />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 mt-4">
                                            <img onClick={claimReward} alt="claim reward button" src={`/claim_reward_button.svg`} width={300}/>
                                        </div>
                                    </div>
                                }
                            </div>
                        )}
                    </div>
                )
            :
                <div className="flex flex-col items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-mono">
                            <span className="text-gray-500 dark:text-gray-400">{
                            String(time.hours).padStart(2, '0')
                            }:</span>
                            {
                            String(time.minutes).padStart(2, '0')
                            }:
                            {
                            String(time.seconds).padStart(2, '0')
                            }
                        </div>
                    </div>
                    <div className="w-full max-w-md relative" style={{ backgroundColor: 'inherit' }}>
                        <div className="flex justify-center">
                            <img alt="unhatched" src={`/egg.svg`} className="rounded-lg" width={192} />
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        {isFocused ? 
                            <button onClick={endFocus}>
                                <img alt="end button" src={`/big_button_finished.svg`} width={256}/>
                            </button>
                        : 
                            <button onClick={startFocus}>
                                <img alt="start button" src={`/big_button.svg`} width={256}/>
                            </button>    
                        }
                    </div>
                </div>
            }
        </div>
      )
}
