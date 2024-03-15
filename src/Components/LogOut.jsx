import React from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../assets/Styles/logout.css'

const LogOut = () => {
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await auth.signOut();
            navigate('/login');
        }   catch (error) {
            console.error('Errot logging out:', error.message);
        }
    };

    return (
        <div className='logout-card'>
            <h2>Logout</h2>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    );
};

export default LogOut;