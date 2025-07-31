import React from 'react'

function ToDo() {
    return (
        <div className="card to-dos">
            <div className='section-title'>
                <h3>TO_DOS</h3>
                <label className="add-task" style={{ width: "100%" }}><input type='text' className='todo-input' placeholder='Add a to-do' />
                    <span className="datepicker-toggle">
                        <span className="datepicker-toggle-button btn-purple">
                            <img src='assets/images/calendar.svg' />
                        </span>
                        <input type="date" className="datepicker-input" />
                    </span>
                </label>
            </div>
            <ul className="task-list">
                <li className="task-item"><label><input type="checkbox" />Submit Graduation project</label><span className='date-gray'>1/Aug/2025</span></li>
                <li className="task-item"><label><input type="checkbox" />Post in LinkedIn</label><span className='date-gray'>1/Aug/2025</span></li>
                <li className="task-item"><label><input type="checkbox" />Manage the posts in the website</label><span className='date-gray'>1/Aug/2025</span></li>
            </ul>
        </div>
    )
}

export default ToDo