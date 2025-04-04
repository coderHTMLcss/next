import React from 'react';
import '../globals.css';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header
                title='Admin Panel'
                className='bg-gray-800 text-white p-4'
                links={[
                    { href: '/admin/dashboard', label: 'Dashboard' },
                    { href: '/admin/users', label: 'Users' },
                    { href: '/admin/settings', label: 'Settings' },
                ]}
            />
            <div className='flex flex-1'>
                <Sidebar
                    title='Admin Sidebar'
                    className='bg-gray-300 p-4'
                    links={[
                        { href: '/admin/dashboard', label: 'Dashboard', className: "block p-2 hover:bg-gray-500 rounded" },
                        { href: '/admin/users', label: 'Manage Users', className: "block p-2 hover:bg-gray-500 rounded" },
                        { href: '/admin/settings', label: 'Settings', className: "block p-2 hover:bg-gray-500 rounded" },
                    ]}
                />
                <div className='flex-1 p-4 bg-white'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
