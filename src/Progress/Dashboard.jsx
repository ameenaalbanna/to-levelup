import React from 'react';
import './progress.css';

function Progress() {
    return (
        <div className="progress-page">
            <div className='container'>
                <div className="section-header" style={{ width: "100%" }}>
                    <h2>PROGRESS</h2>
                </div>
            </div>
            
            <div className="card progress-section">
                <h3 className="section-title">📋 LEVEL PROGRESS</h3>
                <div className="level-box">
                    <button className="level-btn">LEVEL 12</button>
                    <div className="xp-bar-container">
                        <div className="xp-bar-fill" style={{ width: '62.5%' }}></div>
                        <span className="xp-text">1,250 / 2,000 XP</span>
                    </div>
                    <p className="xp-subtext">750 XP to next level!</p>
                </div>
            </div>


            <div className="card achievements-section">
                <h3 className="section-title">🏆 ACHIEVEMENTS</h3>
                <div className="achievements-grid">
                    <div className="achievement-item">
                        🔥<span>Week Warrior</span>
                    </div>
                    <div className="achievement-item">
                        ⚡<span>Early Bird</span>
                    </div>
                    <div className="achievement-item">
                        💪<span>Consistency King</span>
                    </div>
                    <div className="achievement-item">
                        🎯<span>Goal Crusher</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Progress;
