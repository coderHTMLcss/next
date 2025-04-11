import Link from 'next/link';
import React from 'react'

const SalariesPage = () => {
    return (
        <div>
            <h1>Check out my salary</h1>
            <Link
                className='p-2 inline-block border-3 border-teal-400 bg-red-300'
                href='/'
            >
                Go to the members page
            </Link>
        </div>
    );
};

export default SalariesPage;
