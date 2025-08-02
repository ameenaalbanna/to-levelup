import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import './progress.css';

function Progress() {
    const [xp] = useLocalStorage('xp', 0);

    // Leveling logic
    const getLevelInfo = (xp) => {
        const xpPerLevel = 100; // Can increase per level if you want to scale
        const level = Math.floor(xp / xpPerLevel);
        const levelStartXp = level * xpPerLevel;
        const levelEndXp = (level + 1) * xpPerLevel;
        const xpInLevel = xp - levelStartXp;
        const xpToNext = levelEndXp - xp;
        const percent = (xpInLevel / xpPerLevel) * 100;

        return {
            level,
            xpInLevel,
            xpPerLevel,
            xpToNext,
            percent,
            levelStartXp,
            levelEndXp
        };
    };

    const {
        level,
        xpInLevel,
        xpPerLevel,
        xpToNext,
        percent,
        levelEndXp
    } = getLevelInfo(xp);

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
                    <button className="level-btn">LEVEL {level}</button>
                    <p className="xp-subtext">{xp} / {levelEndXp} XP</p>
                    <div className="xp-bar-container">
                        <div className="xp-bar-fill" style={{ width: `${percent}%` }}></div>
                        <span className="xp-text">{xp} / {levelEndXp} XP</span>
                    </div>
                    <p className="xp-subtext">{xpToNext} XP to next level!</p>
                </div>
            </div>

            <div className="card achievements-section">
                <h3 className="section-title">🏆 ACHIEVEMENTS</h3>
                <div className="achievements-grid">
                    <div className="achievement-item">🔥<span>Week Warrior</span></div>
                    <div className="achievement-item">⚡<span>Early Bird</span></div>
                    <div className="achievement-item">💪<span>Consistency King</span></div>
                    <div className="achievement-item">🎯<span>Goal Crusher</span></div>
                </div>
            </div>
        </div>
    );
}

export default Progress;
