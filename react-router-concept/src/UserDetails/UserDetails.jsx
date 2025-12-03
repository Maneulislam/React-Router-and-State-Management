import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = (params) => {

    const user = useLoaderData(params);

    const { name, website } = user;

    return (
        <div>
            <h1>User details</h1>

            <h2>{name}</h2>
            <p>{website}</p>
        </div>
    );
};

export default UserDetails;