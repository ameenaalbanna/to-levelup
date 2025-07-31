import React, { useEffect } from 'react';

function XPPopup({ value, onComplete }) {
    useEffect(() => {
        const sound = new Audio('/assets/sounds/xp-gain.mp3');
        sound.play();

        const timer = setTimeout(() => {
            onComplete();
        }, 2000); // matches animation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="xp-popup">
            {value > 0 ? `+${value} XP` : `${value} XP`}
        </div>
    );
}

export default XPPopup;
