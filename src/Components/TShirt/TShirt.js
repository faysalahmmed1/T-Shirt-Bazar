import React from 'react';
import './TShirt.css'

const TShirt = ({ handleAddToCart, tShirt }) => {

    const { id, name, picture, price } = tShirt;
    return (
        <div className='tShirt-all'>
            <img src={picture} alt="" />
            <h1><small>{id}</small></h1>
            <h1>{name}</h1>
            <h1>Price:{price}</h1>
            <button className='button' onClick={() => handleAddToCart(tShirt)}>Add To Card</button>

        </div>
    );
};

export default TShirt;