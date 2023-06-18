import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header-site'>
            <div>
                <h1 className='t-shirt-bazar'>T-Shirt Bazar</h1>
            </div>
            <div className='header-site2'>
                <nav className='nav'>
                    <Link to='/Home'>Home</Link>
                    <Link to='orderreview'> Orderreview</Link>
                    <Link to='Grandpa'>Grandpa</Link>
                    <Link to='/About'>About</Link>
                </nav>
            </div>

        </div>

    );
};

export default Header;