import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav>
                <Link to="/" className="logo">
                    <img style={{ width: "35px" }} src="assets/images/To-LevelUp-gold.svg" alt="logo" />
                    <span>To-LevelUp</span>
                </Link>

                
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
                </div>

                
                <ul className={`navbar ${menuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/tasks">Tasks</NavLink></li>
                    <li><NavLink to="/progress">Progress</NavLink></li>
                    <li><NavLink to="/reward">Reward</NavLink></li>
                    <li><NavLink to="/settings">Settings</NavLink></li>
                    <li>
                        <div className="login">
                            <NavLink to="/login">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 100 100"
                                    style={{ width: "35px", fill: "currentColor" }}
                                >
                                    <polygon
                                        points="19.052,95.251 23.812,95.251 28.572,95.251 33.332,95.251 38.092,95.251 42.852,95.251 47.612,95.251 52.401,95.251 52.401,95.233 57.147,95.233 61.907,95.233 66.667,95.233 71.427,95.233 76.188,95.233 80.947,95.233 85.707,95.233 90.467,95.233 95.237,95.233 95.237,90.463 95.237,85.703 95.237,80.942 90.467,80.942 90.467,76.183 90.467,71.423 85.707,71.423 85.707,66.663 80.947,66.663 80.947,61.903 76.188,61.903 76.188,57.123 71.427,57.123 66.667,57.123 61.907,57.123 61.907,61.903 57.147,61.903 52.387,61.903 52.387,61.921 47.612,61.921 42.852,61.921 38.092,61.921 38.092,57.141 33.332,57.141 28.572,57.141 23.812,57.141 23.812,61.921 19.052,61.921 19.052,66.681 14.292,66.681 14.292,71.44 9.532,71.44 9.532,76.2 9.532,80.96 4.762,80.96 4.762,85.721 4.762,90.48 4.762,95.251 9.532,95.251 14.292,95.251"
                                    />
                                    <polygon
                                        points="52.387,4.749 52.387,4.766 47.598,4.766 42.837,4.766 38.077,4.766 38.077,9.526 33.317,9.526 33.317,14.286 28.558,14.286 28.558,19.046 23.797,19.046 23.797,23.806 23.797,28.566 23.797,33.326 23.797,38.086 28.558,38.086 28.558,42.846 33.317,42.846 33.317,47.606 38.077,47.606 38.077,52.376 42.837,52.376 47.598,52.376 52.387,52.376 52.387,52.358 57.147,52.358 61.907,52.358 61.907,47.588 66.667,47.588 66.667,42.829 71.427,42.829 71.427,38.068 76.188,38.068 76.188,33.309 76.188,28.548 76.188,23.789 76.188,19.028 71.427,19.028 71.427,14.269 66.667,14.269 66.667,9.508 61.907,9.508 61.907,4.749 57.147,4.749"
                                    />
                                </svg>
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
