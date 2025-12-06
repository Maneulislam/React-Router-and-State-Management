import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';


export const AssetContext = createContext('');
export const MoneyContext = createContext(0);


const asset = "Gold";

const FamilyTree = () => {

    const [money, setMoney] = useState(0);


    return (
        <div className='familyTree'>
            <h1>New component</h1>
            <h3>FamilyTree</h3>
            <h5>Money : {money}</h5>

            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={asset}>
                    <Grandpa></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>

        </div>
    );
};

export default FamilyTree;