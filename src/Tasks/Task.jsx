import React from 'react'
import Habit from './Habit'
import Daily from './Daily'
import ToDo from './ToDo'

function Task() {
    return (
        <div>
            <div className='task-view'>
                <div className="task-container">
                    <div style={{ width: "100%", marginTop: "20px" }}>
                        <h2>TASK MANAGEMENT</h2>
                    </div>

                    <Habit />

                    <Daily />

                    <ToDo />


                </div>
            </div>
        </div>
    )
}

export default Task