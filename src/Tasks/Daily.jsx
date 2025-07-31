import React from 'react'

function Daily() {
    return (
        <div className="card dailies">
            <div className='section-title'>
                <h3>DAILIES</h3>
                <label className="add-task" style={{ width: "100%" }}><input type='text' className='dailie-input' placeholder='Add a dailie' /></label>
            </div>
            <ul className="task-list">
                <li className="task-item"><label><input type="checkbox" />Complete morning workout</label></li>
                <li className="task-item"><label><input type="checkbox" />Read for 30 minutes</label></li>
                <li className="task-item"><label><input type="checkbox" />Finish project report</label></li>
            </ul>
        </div>
    )
}

export default Daily