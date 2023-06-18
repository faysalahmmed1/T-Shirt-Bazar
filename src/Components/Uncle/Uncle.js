import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Uncle = ({House}) => {
    const ring = useContext(RingContext);
    return (
        <div>
            <h2>Uncle</h2>
            <p>House:{House}</p>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Uncle;