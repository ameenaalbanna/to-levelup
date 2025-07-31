import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import XPPopup from '../Components/XPPopup';

function Habit() {
    const [habits, setHabits] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [type, setType] = useState(null); // "positive" | "negative"
    const [xp, setXp] = useLocalStorage('xp', 0);
    const [showPopup, setShowPopup] = useState(false);
    const [xpChange, setXpChange] = useState(0);

    const toggleType = () => {
        if (type === 'positive') setType('negative');
        else setType('positive');
    };

    const handleSubmit = () => {
        if (!inputValue.trim() || !type) return;

        const newHabit = {
            id: Date.now(),
            text: inputValue,
            type: type
        };

        setHabits([...habits, newHabit]);
        setInputValue('');
        setType(null);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleHabitClick = (habitType) => {
        const change = habitType === 'positive' ? 5 : -5;
        setXp(prev => prev + change);
        setXpChange(change);
        setShowPopup(true);
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
                <button className="btn-purple" onClick={handleSubmit}>Add</button>
            </label>

            <ul className="task-list">
                {habits.map(habit => (
                    <li key={habit.id} className="task-item">
                        <label>
                            <button
                                className={habit.type === 'positive' ? 'btn-yellow' : 'btn-disabled'}
                                onClick={() => habit.type === 'positive' && handleHabitClick('positive')}
                            >
                                +
                            </button>
                            {habit.text}
                        </label>
                        <button
                            className={habit.type === 'negative' ? 'btn-purple' : 'btn-disabled'}
                            onClick={() => habit.type === 'negative' && handleHabitClick('negative')}
                        >
                            -
                        </button>
                    </li>
                ))}
            </ul>

            {showPopup && (
                <XPPopup
                    value={xpChange}
                    onComplete={() => setShowPopup(false)}
                />
            )}
        </div>
    );
}

export default Habit;
