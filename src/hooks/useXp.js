import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useXP() {
    const [xp, setXp] = useLocalStorage('xp', 0);
    const [popup, setPopup] = useState({ visible: false, value: 0 });

    const addXP = (amount) => {
        setXp(prev => prev + amount);
        setPopup({ visible: true, value: amount });
    };

    const hidePopup = () => setPopup({ ...popup, visible: false });

    return { xp, addXP, popup, hidePopup };
}
