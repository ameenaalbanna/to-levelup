import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import useXp from '../hooks/useXp';
import XPPopup from '../Components/XPPopup';

function Habit() {
    const [habits, setHabits] = useLocalStorage('habits', []);
    const [inputValue, setInputValue] = useState('');
    const [type, setType] = useState(null); // "positive" | "negative"
    const { addXPAndCoins, popups, removePopup } = useXp();

    const toggleType = () => {
        if (type === 'positive') setType('negative');
        else setType('positive');
    };

    const addHabit = () => {
        if (!inputValue.trim() || !type) return;

        const newHabit = {
            id: Date.now(),
            text: inputValue.trim(),
            type: type
        };
        setHabits([...habits, newHabit]);
        setInputValue('');
        setType(null);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addHabit();
        }
    };

    const handleHabitClick = (habitType) => {
        if (habitType === 'positive') {
            addXPAndCoins(5, 10); // +5 XP, +10 coins
        } else {
            addXPAndCoins(-5, 0); // -5 XP, no coin
        }
    };

    const deleteHabit = (id) => {
        setHabits(habits.filter(h => h.id !== id));
    };

    return (
        <div className="card habits">
            <h3>HABITS</h3>
            <label className="add-task">
                <input
                    type="text"
                    className="habit-input"
                    placeholder="Add a habit"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    className={`toggle-type-btn ${type === 'positive' ? 'btn-yellow' : type === 'negative' ? 'btn-purple' : 'btn-disabled'}`}
                    onClick={toggleType}
                >
                    {type === 'negative' ? '-' : '+'}
                </button>
                <button className="btn-purple" onClick={addHabit}>Add</button>
            </label>

            <ul className="task-list">
                {habits.map(habit => (
                    <li key={habit.id} className="task-item">
                        <label>
                            <button
                                id="habit-positive"
                                className={habit.type === 'positive' ? 'btn-yellow' : 'btn-disabled'}
                                onClick={() => habit.type === 'positive' && handleHabitClick('positive')}
                            >
                                +
                            </button>
                            {habit.text}
                        </label>
                        <button
                            id='habit-negative'
                            className={habit.type === 'negative' ? 'btn-purple' : 'btn-disabled'}
                            onClick={() => habit.type === 'negative' && handleHabitClick('negative')}
                        >
                            -
                        </button>
                        <button className="btn-gray" onClick={() => deleteHabit(habit.id)}>
                            <img src='assets/images/trash.svg' alt="delete" />
                        </button>
                    </li>
                ))}
            </ul>

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

export default Habit;
