import React, { useEffect } from 'react';

function XPPopup({ xpValue, coinValue, onComplete }) {
    useEffect(() => {
        const sound = new Audio('/assets/sounds/xp-gain.mp3');
        sound.play();

        const timer = setTimeout(() => {
            onComplete();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="xp-popup">
            {xpValue !== 0 && (
                <div>{xpValue > 0 ? `+${xpValue} XP` : `${xpValue} XP`}</div>
            )}
            {coinValue !== 0 && (
                <div>{coinValue > 0 ? `+${coinValue} ¢` : `${coinValue} ¢`}</div>
            )}
        </div>
    );
}

export default XPPopup;
