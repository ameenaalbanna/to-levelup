import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent form reload
        navigate('/'); // Navigate to homepage
    };

    return (
        <div className="login-page-wrapper">
            <div className="card login-page">
                <h2>LOGIN</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <input type="text" id="username" name="username" placeholder='Username' required />
                    <button className="btn-purple" type="submit">LOGIN</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
