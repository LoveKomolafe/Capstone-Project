import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
           setIsAuthenticated(!!user);
        });

        return () => unsubscribe();

    }, []); 

    const handleAdminLogin = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);

            navigate("/admin/dashboard");

            // Admin User logged in successfully
            console.log("Admin logged in successfully");
        }   catch (error) {
                console.error("Error logging in: ", error);
                setError("Invalid Email or Password");
            }
    };

    return (
        <div className='login-card'>
            <h2>Admin Login</h2>

            <p>Log Into your Admin Account</p>

            <form onSubmit={handleAdminLogin}>
                <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button onClick={handleAdminLogin}>Login</button>
            </form>

            {error && <div className="error-message">{error}</div>}

        </div>
    );

}

export default AdminLogin;