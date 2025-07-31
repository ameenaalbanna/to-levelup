import React from 'react'

function Task() {
    return (
        <div>
            <div className='task-view'>
                <div className="task-container">
                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <h2>TASK MANAGEMENT</h2>
                    </div>

                    <div className="card habits">

                        <h3>HABITS</h3>
                        <label className="add-task"><button className="xp-btn">+</button><input type='text' className='habit-input' placeholder='Add a habit' /><button className="btn">-</button></label>


                        <ul className="task-list">
                            <li className="task-item"><label><input type="checkbox" />Complete morning workout</label><button className="xp-btn">+10 XP</button></li>
                            <li className="task-item"><label><input type="checkbox" />Read for 30 minutes</label><button className="xp-btn">+10 XP</button></li>
                            <li className="task-item"><label><input type="checkbox" />Finish project report</label><button className="xp-btn">+15 XP</button></li>
                        </ul>
                    </div>

                    <div className="card dailies">
                        <div className='section-title'>
                            <h3>DAILIES</h3>
                            <label className="add-task" style={{ width: "100%" }}><input type='text' className='dailie-input' placeholder='Add a dailie' /></label>
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
                            <label className="add-task" style={{ width: "100%" }}><input type='text' className='todo-input' placeholder='Add a to-do' />
                                <span className="datepicker-toggle">
                                    <span className="datepicker-toggle-button btn">
                                        <img src='assets/images/calendar.svg' />
                                    </span>
                                    <input type="date" className="datepicker-input" />
                                </span>
                            </label>
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