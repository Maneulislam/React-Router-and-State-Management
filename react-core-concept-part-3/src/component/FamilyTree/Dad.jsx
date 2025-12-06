import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';
import Sister from './Sister';

const Dad = () => {
    return (
        <div className='familyTree'>
            <h3>Dad</h3>
            <section className='familyTree flex'>
                <MySelf></MySelf>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;