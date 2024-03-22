import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MoneyContext } from '../ContextAPI/ContextAPI';

const Aunty = () => {
    const [money, setMoney]= useContext(MoneyContext)
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'bayzid'}></Cousin>
                <Cousin name={'suraiya'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)}>Add 1000 taka</button>
        </div>
    );
};

export default Aunty;