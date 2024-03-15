import React, { useState } from 'react';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AdminSignup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAdminSignup = async (e) => {
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('Signing up as an Admin User');
            navigate("/admin/dashboard");
        }   catch (error) {
                console.error("Error signing up: ", error);
            }
    };

    return (
        <div className='sign-card'>
            <h2>Admin Sign Up</h2>

            <p>Create an account as an Admin User</p>
            <form onSubmit={handleAdminSignup}>
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
                <br />
                <button type="submit">Sign Up</button>
            </form>

            <p>
                Already have an account? <Link to="/admin/login">Log In</Link>
            </p>
            <Link to="/">Back to Home</Link>
        </div>
    );
}

export default AdminSignup;