import Link from 'next/link';
import React from 'react'

const MembersPage = () => {
    // if (2 < 5) {
    //     throw new Error('Error')
    // }
    return (
        <div className='border p-[10rem] w-[30rem]'>
            Members Page
            <br />
            <Link
                className='p-2 inline-block border-3 border-teal-400 bg-red-300'
                href='/salaries'
            >
                Go to the salaries page
            </Link>
        </div>
    );
};

export default MembersPage;
