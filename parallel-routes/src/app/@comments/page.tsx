import React from 'react'

const CommentsPage = async () => {
    await new Promise((resolve) => {
        return setTimeout(() => {
            resolve("Content")
        }, 2500);
    });
    return (
        <div className='border p-[10rem] w-[30rem]'>
            Comments
        </div>
    );
};

export default CommentsPage;
