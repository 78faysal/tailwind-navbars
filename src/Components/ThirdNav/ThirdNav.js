import React from 'react';

const ThirdNav = () => {
    return (
        <nav className='fixed rounded-full bg-white w-15 h-80 max-h-lg -translate-y-1/2 top-1/2 text-center p-3 left-3'>
            <div>
                <ul className=''>
                    <li className='md:my-5 my-3 text-2xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon data-tooltip-target="tooltip-home" name="home-outline"></ion-icon>
                    </li>
                    <li className='md:my-5 my-3 text-2xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon name="podium-outline"></ion-icon>
                    </li>
                    <li className='md:my-5 my-3 text-3xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </li>
                    <li className='md:my-5 my-3 text-2xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon name="call-outline"></ion-icon>
                    </li>
                    <li className='md:my-5 my-3 text-2xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon name="person-circle-outline"></ion-icon>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default ThirdNav;