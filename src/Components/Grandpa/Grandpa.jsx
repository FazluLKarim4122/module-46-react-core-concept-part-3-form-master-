import React, { createContext, useState } from 'react';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'
import { MoneyContext } from '../ContextAPI/ContextAPI';

export const AssetContext = createContext('gold')
const Grandpa = () => {
    const asset = 'diamond';
    const [money, setMoney]= useState(1000)
    return (
        <div className='grandpa '>
            <h2>Grandpa</h2>
            <p>Net Money: {money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='gold'>
                    <section className='flex'>
                        <Dad asset={asset}></Dad>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};

export default Grandpa;

/**
 * Context API
 * 1. Create a context and export it
 * 2. Add provider (tower) for the context with a value. value could be anything
 * 3. use useContext hook to access value in he Context API
 */