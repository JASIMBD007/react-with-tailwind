import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className='mt-16'>
            <Navbar></Navbar>
            <h2 className='text-4xl'>Save Most of Your Money!!!</h2>
            <p>By giving your money to me!!!</p>
        </div>
    );
};

export default Header;