import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import XPPopup from '../Components/XPPopup';

function Daily() {
    const [dailies, setDailies] = useLocalStorage('dailies', []);
    const [inputValue, setInputValue] = useState('');
    const [xp, setXp] = useLocalStorage('xp', 0);
    const [coins, setCoins] = useLocalStorage('coins', 0);
    const [popups, setPopups] = useState([]); // Array for multiple popups

    const addDaily = () => {
        if (!inputValue.trim()) return;
        const newTask = {
            id: Date.now(),
            text: inputValue.trim(),
            completed: false
        };
        setDailies([...dailies, newTask]);
        setInputValue('');
    };

    const deleteDaily = (id) => {
        setDailies(dailies.filter(t => t.id !== id));
    };

    const toggleComplete = (id) => {
        const updatedTasks = dailies.map(t => {
            if (t.id === id) {
                const newCompleted = !t.completed;
                const xpDelta = newCompleted ? 10 : -10;
                const coinDelta = newCompleted ? 15 : -15;

                setXp(prev => prev + xpDelta);
                setCoins(prev => prev + coinDelta);

                // Add a new popup to the array
                setPopups(prev => [
                    ...prev,
                    {
                        id: Date.now() + Math.random(),
                        xpValue: xpDelta,
                        coinValue: coinDelta
                    }
                ]);

                return { ...t, completed: newCompleted };
            }
            return t;
        });
        setDailies(updatedTasks);
    };

    // Remove popup by id
    const removePopup = (id) => {
        setPopups(prev => prev.filter(p => p.id !== id));
    };

    return (
        <div className="card dailies">
            <div className='section-title'>
                <h3>DAILIES</h3>
                <label className="add-task" style={{ width: "100%" }}>
                    <input
                        type='text'
                        className='daily-input'
                        placeholder='Add a daily'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addDaily()}
                    />
                    <button className="btn-purple" onClick={addDaily}>Add</button>
                </label>
            </div>

            <ul className="task-list">
                {dailies.map(task => (
                    <li key={task.id} className={`task-item ${task.completed ? 'task-completed' : ''}`}>
                        <label>
                            <input
                                id="daily-checkbox"
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => toggleComplete(task.id)}
                            />
                            {task.text}
                        </label>
                        <button className="btn-gray" onClick={() => deleteDaily(task.id)}>
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

export default Daily;
