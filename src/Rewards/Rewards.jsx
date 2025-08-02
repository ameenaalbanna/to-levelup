import React, { useEffect, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import XPPopup from '../Components/XPPopup';

function Rewards() {
    const [rewards, setRewards] = useState([]);
    const [coins, setCoins] = useLocalStorage('coins', 0);
    const [popup, setPopup] = useState({ visible: false, xpValue: 0, coinValue: 0 });

    useEffect(() => {
        fetch('/assets/js/api.json')
            .then(res => res.json())
            .then(data => setRewards(data));
    }, []);

    const buyReward = (price) => {
        if (coins >= price) {
            setCoins(prev => prev - price);
            setPopup({ visible: true, xpValue: 0, coinValue: -price });
        } else {
            alert('Not enough coins!');
        }
    };

    const hidePopup = () => {
        setPopup({ visible: false, xpValue: 0, coinValue: 0 });
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
                            className='btn-purple'
                            onClick={() => buyReward(reward.price)}
                        >
                            BUY
                        </button>
                    </div>
                ))}
            </div>

            {popup.visible && (
                <XPPopup
                    xpValue={popup.xpValue}
                    coinValue={popup.coinValue}
                    onComplete={hidePopup}
                />
            )}
        </div>
    );
}

export default Rewards;
