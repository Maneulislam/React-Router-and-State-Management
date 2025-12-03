import React from 'react';
import { Link } from 'react-router';

const User = ({ user }) => {

    const { id, name, email, phone } = user;

    const style = {
        border: '3px solid gold',
        borderRadius: '10px',
        padding: '10px',
        margin: '10px'
    }

    return (
        <div style={style}>
            <h3>{name}</h3>
            <p>{email}</p>
            <p>{phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;