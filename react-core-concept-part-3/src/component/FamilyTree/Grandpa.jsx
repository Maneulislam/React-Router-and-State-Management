import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle';
import Aunt from './Aunt';
import './FamilyTree.css'


const Grandpa = () => {
    return (
        <div className='familyTree'>
            <h3>Grandpa</h3>
            <section className='flex'>
                <Dad></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;