import React, { createContext } from 'react';
import Grandpa from './Grandpa';


export const AssetContext = createContext('');

const asset = "Gold";

const FamilyTree = () => {
    return (
        <div className='familyTree'>
            <h3>FamilyTree</h3>

            <AssetContext.Provider value={asset}>
                <Grandpa></Grandpa>
            </AssetContext.Provider>

        </div>
    );
};

export default FamilyTree;