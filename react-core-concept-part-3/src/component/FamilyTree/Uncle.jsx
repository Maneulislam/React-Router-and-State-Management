import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div className='familyTree'>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name="Akash"></Cousin>
                <Cousin name="Sohag"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;