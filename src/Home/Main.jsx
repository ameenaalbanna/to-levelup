import React, { useState } from 'react';
import { Link } from 'react-router'
import useXp from '../hooks/useXp';
import useLocalStorage from '../hooks/useLocalStorage';
import XPPopup from '../Components/XPPopup';



function Main() {
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [xp, setXp] = useLocalStorage('xp', 0);
    const [coins, setCoins] = useLocalStorage('coins', 0);
    const [popup, setPopup] = useState({ visible: false, xpValue: 0, coinValue: 0 });

    const toggleComplete = (id) => {
        const updated = todos.map(todo => {
            if (todo.id === id) {
                const newCompleted = !todo.completed;
                const xpDelta = newCompleted ? 15 : -15;
                const coinDelta = newCompleted ? 20 : -20;

                setXp(prev => Math.max(prev + xpDelta, 0));
                setCoins(prev => Math.max(prev + coinDelta, 0));
                setPopup({
                    visible: true,
                    xpValue: xpDelta,
                    coinValue: coinDelta
                });

                return { ...todo, completed: newCompleted };
            }
            return todo;
        });

        setTodos(updated);
    };

    const hidePopup = () => {
        setPopup({ visible: false, xpValue: 0, coinValue: 0 });
    };

    return (
        <div>
            <div className='main'>

                <main className="dashboard">

                    <section className="left">
                        <div className="card">
                            <h2><img style={{ width: "30px" }} src='assets/images/sun.png' /> <span className="purple">DAILY OVERVIEW</span></h2>
                            <div className="level-bar">
                                <button className="level-btn">LEVEL 12</button>
                                <div className="progress-bar">
                                    <div className="fill"></div>
                                    <span>1410 / 2000 XP</span>
                                </div>
                            </div>
                            <div className="stats">
                                <div className="stat-box">
                                    <p><strong>8</strong> Tasks Done</p>
                                </div>
                                <div className="stat-box">
                                    <p><strong>3</strong> Streak Days</p>
                                </div>
                            </div>
                        </div>


                        <div className="card">
                            <h2>
                                <img style={{ width: "30px" }} src='assets/images/accepted.png' alt="icon" />
                                <span className="purple">TODAY'S TASKS</span>
                            </h2>

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
                                        <button className="xp-btn">
                                            {todo.completed ? '+15 XP' : '+15 XP'}
                                        </button>
                                    </li>
                                ))}
                            </ul>

                            {popup.visible && (
                                <XPPopup
                                    xpValue={popup.xpValue}
                                    coinValue={popup.coinValue}
                                    onComplete={hidePopup}
                                />
                            )}
                        </div>

                    </section>


                    <section className="right">

                        <div className="header">
                            <h1>Welcome back, adventurer!</h1>
                        </div>

                        <div className="card">
                            <h2><img style={{ width: "30px" }} src='assets/images/coin.png' /> <span className="purple">COINS</span></h2>
                            <p className="coins"><span>{coins}¢</span></p>
                            <Link to="/reward"> <button className="btn-purple">SPEND COINS</button> </Link>
                        </div>


                        <div className="card">
                            <h2><img style={{ width: "23px" }} src='assets/images/badge.png' /> <span className="purple">RECENT BADGES</span></h2>
                            <div className="badges">
                                <div><img style={{ width: "14px" }} src='assets/images/fire.png' /> 3-Day Streak</div>
                                <div><img style={{ width: "14px" }} src='assets/images/lightt.png' /> Early Bird</div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Main