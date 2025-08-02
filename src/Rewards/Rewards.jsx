import React, { useEffect, useState } from 'react';

function Rewards() {
    const [rewards, setRewards] = useState([]);

    useEffect(() => {
        fetch('/assets/js/api.json')
            .then(res => res.json())
            .then(data => setRewards(data));
    }, []);

    return (
        <div>
            <div className='reward-container'>
                {rewards.map(reward => (
                    <div key={reward.id} className='reward-item card'>
                        <img src={reward.image} alt={reward.name} />
                        <label>
                            <span>{reward.name}</span> | <span>{reward.price}</span>¢
                        </label>
                        <button className='btn-purple'>BUY</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rewards;
