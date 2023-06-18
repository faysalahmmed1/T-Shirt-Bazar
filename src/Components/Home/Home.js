import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Home.css';
import UseTShirt from '../../hooks/useTShirt';
import TShirt from '../TShirt/TShirt';


const Home = () => {
    const [tShirt, setTShirt] = UseTShirt();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tShirt => tShirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }
        else {
            alert('Item already Added!!!');
        }

    }
    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id);
        setCart(rest);

    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tShirt.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }

            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}
                ></Cart>
            </div>
            <footer className='footer-container'>
                <h1>Thank you so much comes again  our site!!!</h1>
            </footer>
        </div>


    );
};

export default Home;