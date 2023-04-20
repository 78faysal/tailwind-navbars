import React from 'react';

const SecondNav = () => {
    return (
        <nav className='fixed z-50 md:w-full w-80 h-16 max-w-sm md:max-w-lg -translate-x-1/2 bg-white rounded-full bottom-4 left-1/2'>
            <div className='flex mt-3'>
                <ul className='flex my-auto items-center justify-between mx-auto'>
                    <li className='md:mx-5 mx-3 text-2xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon name="home-outline"></ion-icon>
                    </li>
                    <li className='md:mx-5 mx-3 text-2xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon name="podium-outline"></ion-icon>
                    </li>
                    <li className='md:mx-5 mx-3 text-4xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </li>
                    <li className='md:mx-5 mx-3 text-2xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon name="call-outline"></ion-icon>
                    </li>
                    <li className='md:mx-5 mx-3 text-2xl hover:text-indigo-600 text-gray-700'>
                        <ion-icon name="person-circle-outline"></ion-icon>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SecondNav;