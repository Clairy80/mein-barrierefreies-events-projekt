import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { username, password });
            
            // Speichere Token & User-Daten
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));

            setMessage('Login erfolgreich! 🎉');
            window.location.href = '/dashboard'; // Weiterleitung nach Login
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login fehlgeschlagen ❌');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Benutzername:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    aria-label="Benutzername"
                    required
                />
                
                <label htmlFor="password">Passwort:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Passwort"
                    required
                />
                
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
