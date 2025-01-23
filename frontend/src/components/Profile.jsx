import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get('http://localhost:5000/api/auth/profile', {
                headers: {
                    'Authorization': `Bearer ${token}`  // Send token in Authorization header
                }
            })
            .then(res => {
                setUserData(res.data);  // Set user data to display on profile
            })
            .catch(err => {
                alert('Error fetching profile data');
            });
        } else {
            alert('Please log in');
        }
    }, []);

    if (!userData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Welcome, {userData.name}</h2>
            <p>Email: {userData.email}</p>
            <p>Profile: {userData.profile || 'No profile data available'}</p>
        </div>
    );
};

export default Profile;
