import React from 'react'

function Task() {
    return (
        <div>
            <div className='task-view'>
                <div className="dashboard">
                    <div className='card' style={{ width: "100%" }}>
                        <h2>TASK MANAGEMENT</h2>
                    </div>

                    <div className="card habits">
                        <div className='section-title'>
                            <h3>HABITS</h3>
                            <button className="btn">+</button>
                        </div>
                        <ul className="task-list">
                            <li className="task-item"><label><input type="checkbox" />Complete morning workout</label><button className="xp-btn">+10 XP</button></li>
                            <li className="task-item"><label><input type="checkbox" />Read for 30 minutes</label><button className="xp-btn">+10 XP</button></li>
                            <li className="task-item"><label><input type="checkbox" />Finish project report</label><button className="xp-btn">+15 XP</button></li>
                        </ul>
                    </div>

                    <div className="card dailies">
                        <div className='section-title'>
                            <h3>DAILIES</h3>
                            <button className="btn">+</button>
                        </div>
                        <ul className="task-list">
                            <li className="task-item"><label><input type="checkbox" />Complete morning workout</label><button className="xp-btn">+10 XP</button></li>
                            <li className="task-item"><label><input type="checkbox" />Read for 30 minutes</label><button className="xp-btn">+10 XP</button></li>
                            <li className="task-item"><label><input type="checkbox" />Finish project report</label><button className="xp-btn">+15 XP</button></li>
                        </ul>
                    </div>

                    <div className="card to-dos">
                        <div className='section-title'>
                            <h3>TO_DOS</h3>
                            <button className="btn">+</button>
                        </div>
                        <ul className="task-list">
                            <li className="task-item"><label><input type="checkbox" />Complete morning workout</label><button className="xp-btn">+10 XP</button></li>
                            <li className="task-item"><label><input type="checkbox" />Read for 30 minutes</label><button className="xp-btn">+10 XP</button></li>
                            <li className="task-item"><label><input type="checkbox" />Finish project report</label><button className="xp-btn">+15 XP</button></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Task