import React from 'react';

interface AboutSongProps {
    params: {
        id: string
    };
};

const AboutSong = async ({ params }: AboutSongProps) => {
    const { id } = await params;

    await new Promise((resolve) => {
        return setTimeout(() => resolve("Song is loading..."), 1500)
    });

    return (
        <div className='text-2xl text-white mt-8 font-bold mb-6'>
            <h3>Song : {id}</h3>
        </div>
    )
}

export default AboutSong
