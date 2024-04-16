import React from 'react';
import './App.css';

// Putting the login form onto a card to place into the middle of the screen.
const LoginForm = () => {
    return (
        <div className="login-form">
            <div className="card">
                <h3>Log In</h3>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
