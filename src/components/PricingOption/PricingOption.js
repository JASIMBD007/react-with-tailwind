import React from 'react';
import Benefit from '../Benefit/Benefit';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-300 py-2 rounded text-2xl'>{name}</h2>
            <p>
                <span className='text-5xl font-bold'> {price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl font-bold text-left'>Benefits:</h3>
                {
                    benefits.map(benefit => <Benefit benefit={benefit} />)
                }
            </div>

        </div>
    );
};

export default PricingOption;