import React, { useState } from 'react';

const FirstNav = () => {

    const [open, setOpen] = useState(false);

    return (

        <nav class="bg-white p-5 shadow ">
            <div className='container md:flex md:items-center md:justify-between mx-auto'>
                <div class="">
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        <img className='h-12 inline' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_YWalTprJhGm29nO1N2aHyq8yrwZEHLQXMEoGpD-HAv4PZPqT4Ewl8J0jXAhKBhzv3rw&usqp=CAU" alt="" />
                        Tailwind Navs</span>

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-7 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close-outline' : 'menu-outline'}></ion-icon>
                </div>

                <ul className='md:flex md:items-center md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-3 md:pl-0 pl-5'>
                    <li className='mx-3 my-4 md:my-0 '>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>Home</a>
                    </li>
                    <li className='mx-3 my-4 md:my-0'>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>About</a>
                    </li>
                    <li className='mx-3 my-4 md:my-0'>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>Services</a>
                    </li>
                    <li className='mx-3 my-4 md:my-0'>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>Contact</a>
                    </li>
                    <li className='mx-3 my-4 md:my-0'>
                        <a href="" className='text-xl hover:text-indigo-500 duration-500'>Blogs</a>
                    </li>
                </ul>
            </div>

        </nav>

    );
};

export default FirstNav;