import React, { useState } from 'react';

const ControlledForm = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleControlledForm = (event) => {
        event.preventDefault();

        if (password.length < 6) {
            setError("Password must be 6 character");
        }
        else {
            setError("");
        }

    }

    const handlePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);

        if (password.length < 6) {
            setError("Password must be 6 character");
        }
        else {
            setError("");
        }
    }

    return (
        <div>
            <form onSubmit={handleControlledForm}>
                <input type="email" name='email' placeholder='Email' required />
                <br />
                <input type="password" name='password' onChange={handlePassword} defaultValue={password} placeholder='Password' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledForm;