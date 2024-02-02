'use client';

import React from "react";

export default function FullShop(props) {
    // welcome prompt flag
    const [isWelcome, setIsWelcome] = React.useState(true);
    // clicking item prompt flag
    const [itemConfirmation, setItemConfirmation] = React.useState(false);
    // item confirmation
    const [itemAdded, setItemAdded] = React.useState(false);

    const welcomeEnd = () => {
        setIsWelcome(false);
    }

    const buyItem = () => {
        setIsWelcome(false);
        setItemAdded(false);
        setItemConfirmation(true);
    }

    const cancelBuy = () => {
        setItemConfirmation(false);
    }

    const buyConfirmation = () => {
        setItemConfirmation(false);
        setItemAdded(true);
    }

    const closeConfirmation = () => {
        setItemAdded(false);
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundImage: `url('/background3.png')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white bg-opacity-50 dark:bg-gray-800 p-2 rounded-lg shadow-md">
                <img alt="Coin Icon" className="w-5 h-5" src="/coin.png" />
                <span className="text-sm font-bold">{props.currency}</span>
            </div>
            <div className="flex items-center justify-center" style={{ position: 'absolute', top: '128px', left:'50px' }}>
                <img onClick={buyItem} alt="plant" src={`/plant.svg`} width={96}/>
            </div> 
            <div className="flex items-center justify-center" style={{ position: 'absolute', top: '160px' }}>
                <img onClick={buyItem} alt="pen holder" src={`/pen_holder.svg`} width={96}/>
            </div> 
            <div className="flex items-center justify-center" style={{ position: 'absolute', top: '185px', right:'50px' }}>
                <img onClick={buyItem} alt="pen" src={`/pens.svg`} width={72}/>
            </div> 
            <div className="flex items-center justify-center" style={{ position: 'absolute', top: '300px', left:'40px' }}>
                <img onClick={buyItem} alt="mug" src={`/mug.svg`} width={96}/>
            </div> 
            {isWelcome && (
                <div className="flex items-center justify-center" style={{ position: 'absolute', bottom: '265px', right:'50px' }}>
                    <img onClick={welcomeEnd} alt="chat bubble" src={`/welcome_chat_bubble.svg`} width={256}/>
                </div>
            )}
            {/* buying items */}
            {
                itemConfirmation && (
                <div>
                    <div className="flex items-center justify-center" style={{ position: 'absolute', bottom: '265px', right:'50px' }}>
                        <img alt="chat bubble" src={`/buy_chat_bubble.png`} width={256}/>
                    </div>
                    <div className="flex items-center justify-center" style={{ position: 'absolute', bottom: '260px', left:'125px' }}>
                        <img onClick={cancelBuy} alt="no button" src={`/no_button.svg`} width={72}/>
                    </div>
                    <div className="flex items-center justify-center" style={{ position: 'absolute', bottom: '255px', right:'100px' }}>
                        <img onClick={buyConfirmation} alt="yes button" src={`/yes_button.svg`} width={72}/>
                    </div>
                </div>
            )}
            {/* item added to desk */}
            {
                itemAdded && (
                <div className="flex items-center justify-center" style={{ position: 'absolute', bottom: '265px', right:'50px' }}>
                    <img onClick={closeConfirmation} alt="purchased bubble" src={`/confirmation_chat_bubble.svg`} width={256}/>
                </div>
            )}
            
        </div>
    )
}