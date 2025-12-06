import React from 'react';
import Cousin from './Cousin';
import Special from './Special';

const Aunt = () => {
    return (
        <div className='familyTree'>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name="Joj">
                    <Special></Special>
                </Cousin>

                <Cousin name="Joly"></Cousin>
            </section>
        </div>
    );
};

export default Aunt;