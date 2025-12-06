import React from 'react';
import Special from './Special';
import Aunt from './Aunt';

const Cousin = ({ name }) => {
    return (
        <div >
            <h3>{name}</h3>

            {
                name === 'Joj' && <Special></Special>
            }

        </div>
    );
};

export default Cousin;