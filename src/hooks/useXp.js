import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useXp() {
    const [xp, setXp] = useLocalStorage('xp', 0);
    const [coins, setCoins] = useLocalStorage('coins', 0);
    const [popup, setPopup] = useState({ visible: false, xpValue: 0, coinValue: 0 });

    const addXPAndCoins = (xpAmount, coinAmount = 0) => {
        setXp(prev => Math.max(prev + xpAmount, 0));
        setCoins(prev => prev + coinAmount);

        setPopup({
            visible: true,
            xpValue: xpAmount,
            coinValue: coinAmount
        });
    };

    const hidePopup = () => {
        setPopup({ visible: false, xpValue: 0, coinValue: 0 });
    };

    return { xp, coins, addXPAndCoins, popup, hidePopup };
}
