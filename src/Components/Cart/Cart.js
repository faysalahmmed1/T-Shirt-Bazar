import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    let command;
    if (cart.length == 0) {
        command = <p>Please add at Least One Item!!</p>
    }
    else if (cart.length === 1) {
        command = <p>please Add More Items...</p>
    }
    else {
        command = <p> <small>Thanks for Adding Item !</small></p>
    }
    return (
        <div className='cart-container'>
            <h2> Item Selected:{cart.length}</h2>


            {
                cart.map(tShirt =>
                    <p>
                        {tShirt.name}
                        <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>

                    </p>)
            }
            {
                cart.length === 0 || <h2 className='YaY'>YaY You are Buying!</h2> 
                
            }
            {
                cart.length === 3 && <div className='nice'>
                    <h1>Awesome!</h1>
                </div>
            }
            <h2>{command}</h2>
            {
                cart.length !== 5 ? <p>Keep Adding More!</p> : <button className='Remove-all'>Remove all</button>
            }
            {
                cart.length === 5 && <button className='review-Order'>review Order</button>
            }
           
        </div>
    );
};

export default Cart;