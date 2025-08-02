import React, { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import XPPopup from '../Components/XPPopup';

function Rewards() {
    const [rewards, setRewards] = useState([]);
    const [coins, setCoins] = useLocalStorage('coins', 0);
    const [popups, setPopups] = useState([]); // Array for multiple popups

    useEffect(() => {
        fetch('/assets/js/api.json')
            .then(res => res.json())
            .then(data => setRewards(data));
    }, []);

    const buyReward = (price) => {
        if (coins >= price) {
            setCoins(prev => prev - price);
            setPopups(prev => [
                ...prev,
                {
                    id: Date.now() + Math.random(),
                    xpValue: 0,
                    coinValue: -price
                }
            ]);
        } else {
            alert('Not enough coins!');
        }
    };

    // Remove popup by id
    const removePopup = (id) => {
        setPopups(prev => prev.filter(p => p.id !== id));
    };

    return (
        <div>
            <div className='reward-container'>
                {rewards.map(reward => (
                    <div key={reward.id} className='reward-item card'>
                        <img src={reward.image} alt={reward.name} />
                        <label>
                            <span>{reward.name}</span> | <span>{reward.price}</span>¢
                        </label>
                        <button
                            id="buy-btn"
                            className='btn-purple'
                            onClick={() => buyReward(reward.price)}
                        >
                            BUY
                        </button>
                    </div>
                ))}
            </div>

            {/* Render all active popups */}
            {popups.map(popup => (
                <XPPopup
                    key={popup.id}
                    xpValue={popup.xpValue}
                    coinValue={popup.coinValue}
                    onComplete={() => removePopup(popup.id)}
                />
            ))}
        </div>
    );
}

export default Rewards;
