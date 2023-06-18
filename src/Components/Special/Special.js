import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [Ornament, House] = useContext(RingContext);
    return (
        <div>
        <h4>Special</h4>
        <p>Gift:{Ornament}</p>
        
        <h1><small>{House}</small></h1>
        
        </div>
    );
};

export default Special;