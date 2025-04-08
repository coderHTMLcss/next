import Link from 'next/link';
import React from 'react'

const NotFoundDirectory = () => {
    return (
        <div className='h-screen flex flex-col items-center justify-center text-4xl font-extrabold text-gray-900'>
            <h1>Sorry, this page does not exist :(</h1>
            <Link className='text-2xl text-teal-600 font-bold' href='/'>Go Back Home</Link>
        </div>
    );
};

export default NotFoundDirectory;
