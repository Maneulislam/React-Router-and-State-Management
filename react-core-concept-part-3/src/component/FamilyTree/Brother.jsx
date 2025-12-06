import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Brother = () => {



    const [money, setMoney] = useContext(MoneyContext);

    const handleMoney = () => {
        setMoney(money + 5000)
    }

    return (
        <div>
            <h3>Brother</h3>
            <button onClick={handleMoney}>Add 5000 TK</button>
        </div>
    );
};

export default Brother;