import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOptions = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'limited free',
                'unlimited deals',
                'localized deals',
                'fantastic deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 50, benefits: [
                'everything on free',
                'unlimited deals',
                'localized deals',
                'fantastic deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 90, benefits: [
                'lifetime free',
                'unlimited deals',
                'localized deals',
                'crazy deals'
            ]
        }

    ]
    return (
        <div className='bg-indigo-200 p-4 mt-8 font-mono'>
            <h1 className='text-6xl  text-white'>Best Price Of The Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio est perspiciatis alias itaque mollitia delectus sit natus quisquam id reiciendis tempora, voluptates ipsa consectetur! Quae animi optio dolore illum adipisci.</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricingOption
                        key={option.id}
                        option={option}
                    >

                    </PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;