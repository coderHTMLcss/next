import React from 'react'

const UsersPage = async () => {
    await new Promise((resolve) => {
        return setTimeout(() => {
            resolve('Content Loading...')
        }, 2000)
    })
    return (
        <div>
            Users Page
        </div>
    );
};

export default UsersPage;
