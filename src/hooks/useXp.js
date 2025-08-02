import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useXp() {
    const [xp, setXp] = useLocalStorage('xp', 0);
    const [coins, setCoins] = useLocalStorage('coins', 0);
    const [popups, setPopups] = useState([]);

    const addXPAndCoins = (xpAmount, coinAmount = 0) => {
        setXp(prev => Math.max(prev + xpAmount, 0));
        setCoins(prev => prev + coinAmount);

        // Add a new popup with a unique id
        setPopups(prev => [
            ...prev,
            {
                id: Date.now() + Math.random(), // unique id
                xpValue: xpAmount,
                coinValue: coinAmount
            }
        ]);
    };

    const removePopup = (id) => {
        setPopups(prev => prev.filter(p => p.id !== id));
    };

    return { xp, coins, addXPAndCoins, popups, removePopup };
}
