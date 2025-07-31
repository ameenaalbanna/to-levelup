import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function Habit() {
    const [habits, setHabits] = useLocalStorage("habits", []);
    const [newHabit, setNewHabit] = useState("");
    const [type, setType] = useState(null); // null until user chooses + or -

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && newHabit.trim() && type) {
            const habit = {
                id: Date.now(),
                name: newHabit.trim(),
                type: type,
            };
            setHabits([...habits, habit]);
            setNewHabit("");
            setType(null); // reset type after adding
        }
    };

    return (
        <div className="card habits">
            <h3>HABITS</h3>

            <label className="add-task">
                <button
                    className={type === "positive" ? "btn-yellow" : "btn-disabled"}
                    onClick={() => setType("positive")}
                    type="button"
                >+</button>

                <input
                    type='text'
                    className='habit-input'
                    placeholder='Add a habit'
                    value={newHabit}
                    onChange={(e) => setNewHabit(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <button
                    className={type === "negative" ? "btn-purple" : "btn-disabled"}
                    onClick={() => setType("negative")}
                    type="button"
                >-</button>
            </label>

            <ul className="task-list">
                {habits.map((habit) => (
                    <li key={habit.id} className="task-item">
                        <label>
                            <button className={habit.type === "positive" ? "btn-yellow" : "btn-disabled"}>+</button>
                            {habit.name}
                        </label>
                        <button className={habit.type === "negative" ? "btn-purple" : "btn-disabled"}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Habit;
