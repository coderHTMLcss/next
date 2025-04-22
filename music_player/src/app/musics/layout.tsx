import React from 'react';

interface MusicLayoutProps {
    children: React.ReactNode;
    sidebar: React.ReactNode;
    songs: React.ReactNode;
    player: React.ReactNode;
};

const MusicLayout = ({ children, sidebar, songs, player }: MusicLayoutProps) => {
    return (
        <div className='flex justify-end'>
            {sidebar}
            <div className='w-[80%] h-screen p-6 bg-gray-500'>
                {player}
                {songs}
            </div>
            {children}
        </div>
    );
};

export default MusicLayout;
