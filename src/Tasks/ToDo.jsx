import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import XPPopup from '../Components/XPPopup';

function ToDo() {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [inputValue, setInputValue] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [xp, setXp] = useLocalStorage('xp', 0);
    const [coins, setCoins] = useLocalStorage('coins', 0);
    const [showPopup, setShowPopup] = useState(false);
    const [xpChange, setXpChange] = useState(0);
    const [coinChange, setCoinChange] = useState(0);

    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return isNaN(date)
            ? ''
            : `${date.getDate()}/${date.toLocaleString('default', { month: 'short' })}/${date.getFullYear()}`;
    };

    const addTodo = () => {
        if (!inputValue.trim()) return;
        const newTodo = {
            id: Date.now(),
            text: inputValue.trim(),
            completed: false,
            date: selectedDate
        };
        setTodos([...todos, newTodo]);
        setInputValue('');
        setSelectedDate('');
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    const toggleComplete = (id) => {
        const updated = todos.map(todo => {
            if (todo.id === id) {
                const newCompleted = !todo.completed;
                const xpDelta = newCompleted ? 15 : -15;
                const coinDelta = newCompleted ? 20 : -20;

                setXp(prev => Math.max(prev + xpDelta, 0));
                setCoins(prev => Math.max(prev + coinDelta, 0));

                setXpChange(xpDelta);
                setCoinChange(coinDelta);
                setShowPopup(true);

                return { ...todo, completed: newCompleted };
            }
            return todo;
        });
        setTodos(updated);
    };

    return (
        <div className="card to-dos">
            <div className='section-title'>
                <h3>TO_DOS</h3>
                <label className="add-task" style={{ width: "100%" }}>
                    <input
                        type='text'
                        className='todo-input'
                        placeholder='Add a to-do'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                    />
                    <button className="btn-purple" onClick={addTodo}>Add</button>
                    <span className="datepicker-toggle">
                        <span className="datepicker-toggle-button btn-purple">
                            <img src='assets/images/calendar.svg' alt="calendar" />
                        </span>
                        <input
                            type="date"
                            className="datepicker-input"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                        />
                    </span>
                </label>
            </div>
            <ul className="task-list">
                {todos.map(todo => (
                    <li key={todo.id} className={`task-item ${todo.completed ? 'task-completed' : ''}`}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleComplete(todo.id)}
                            />
                            {todo.text}
                        </label>
                        <span className='task-date'>{formatDate(todo.date)}</span>
                        <button className="btn-gray" onClick={() => deleteTodo(todo.id)}>
                            <img src='assets/images/trash.svg' alt="delete" />
                        </button>
                    </li>
                ))}
            </ul>

            {showPopup && (
                <XPPopup
                    xpValue={xpChange}
                    coinValue={coinChange}
                    onComplete={() => setShowPopup(false)}
                />
            )}
        </div>
    );
}

export default ToDo;
