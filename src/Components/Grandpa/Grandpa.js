import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

export const RingContext = createContext('ring');
const Grandpa = () => {
    const [House, setHouse] = useState(5);
    const Ornament = 'Daimon Ring'
    const handleBuyAHouse = () => {
        const NewHouseCount = House + 1;
        setHouse(NewHouseCount);
    }


    return (
        <RingContext.Provider value={[Ornament, House]} >
        <div className='Grandpa'>
            <h1 className='center'>GrandPa</h1>
            <p>House:{House}</p>
            <button className='button-style' onClick={handleBuyAHouse}>Buy House</button>


            <section style={{ display: 'flex' }}>
                <Father House={House}></Father>
                <Uncle House={House}></Uncle>
                <Aunty House={House}></Aunty>
            </section>
        </div>
        </RingContext.Provider >

    );
};

export default Grandpa;