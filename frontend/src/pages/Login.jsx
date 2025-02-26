import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [accessibilityOptions, setAccessibilityOptions] = useState([]);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users/login', { username, password });
            localStorage.setItem('token', response.data.token);
            setMessage('Login erfolgreich!');
        } catch (error) {
            setMessage(error.response?.data?.message || 'Login fehlgeschlagen');
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
                />
                
                <label htmlFor="password">Passwort:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-label="Passwort"
                />
                
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            
            {/* Barrierefreiheit Optionen */}
            <h3>Barrierefreiheit</h3>
            <label>
                <input type="checkbox" value="screenreader" 
                    onChange={(e) => setAccessibilityOptions([...accessibilityOptions, e.target.value])} />
                Screenreader-Unterstützung
            </label>
            <label>
                <input type="checkbox" value="braille" 
                    onChange={(e) => setAccessibilityOptions([...accessibilityOptions, e.target.value])} />
                Braille-Ausgabe
            </label>
            <label>
                <input type="checkbox" value="signlanguage" 
                    onChange={(e) => setAccessibilityOptions([...accessibilityOptions, e.target.value])} />
                Gebärdensprach-Übersetzung
            </label>
        </div>
    );
};

export default Login;
