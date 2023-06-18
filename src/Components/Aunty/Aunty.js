import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Aunty = ({House}) => {
    const ping = useContext(RingContext);
    return (
        <div>
            <h2>Aunty</h2>
            <p>House:{House}</p>
            <p><small>{ping}</small></p>
        </div>
    );
};

export default Aunty;