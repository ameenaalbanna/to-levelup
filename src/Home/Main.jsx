import React from 'react'
import { Link } from 'react-router'

function Main() {
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
                            <h2><img style={{ width: "30px" }} src='assets/images/accepted.png' /> <span className="purple">TODAY'S TASKS</span></h2>
                            <ul className="task-list">
                                <li className="task-item"><label><input type="checkbox" />Complete morning workout</label><button className="xp-btn">+10 XP</button></li>
                                <li className="task-item"><label><input type="checkbox" />Read for 30 minutes</label><button className="xp-btn">+10 XP</button></li>
                                <li className="task-item"><label><input type="checkbox" />Finish project report</label><button className="xp-btn">+15 XP</button></li>
                            </ul>
                        </div>
                    </section>


                    <section className="right">

                        <div className="header">
                            <h1>Welcome back, adventurer!</h1>
                        </div>

                        <div className="card">
                            <h2><img style={{ width: "30px" }} src='assets/images/coin.png' /> <span className="purple">COINS</span></h2>
                            <p className="coins"><span>530</span></p>
                            <Link to="/reward"> <button className="btn">SPEND COINS</button> </Link>
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