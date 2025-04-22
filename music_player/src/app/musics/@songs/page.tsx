import { Clock, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const SongsList = async () => {
    await new Promise((resolve) => {
        return setTimeout(() => resolve("Songs List is loading..."), 1500)
    });

    const songs = [
        { id: 1, artist: "The Beatles", title: "Let It Be", time: "4:03" },
        { id: 2, artist: "Queen", title: "Bohemian Rhapsody", time: "5:55" },
        { id: 3, artist: "Eminem", title: "Lose Yourself", time: "5:26" },
        { id: 4, artist: "Adele", title: "Rolling in the Deep", time: "3:48" },
        { id: 5, artist: "Nirvana", title: "Smells Like Teen Spirit", time: "5:01" },
        { id: 6, artist: "Michael Jackson", title: "Billie Jean", time: "4:54" },
        { id: 7, artist: "Drake", title: "God's Plan", time: "3:19" },
        { id: 8, artist: "Coldplay", title: "Fix You", time: "4:55" },
        { id: 9, artist: "Linkin Park", title: "In the End", time: "3:36" },
        { id: 10, artist: "Taylor Swift", title: "Blank Space", time: "3:51" }
    ];

    return (
        <div className='mx-auto px-4 flex-1'>
            <h2 className='text-3xl text-white mt-8 font-bold mb-6'>
                Songs Collection
            </h2>
            <ul className='space-y-4 overflow-hidden h-[calc(100vh-20rem)] overflow-y-auto'>
                {songs.map(song => {
                    return <Link href={`/musics/${song.id}`} key={song.id}>
                        <li
                            className='flex items-center justify-between p-3 hover:bg-[#2A2929] rounded-md cursor-pointer
    transition-all duration-400 ease-in-out transform hover:scale-95 hover:text-white'
                        >
                            <div className='flex items-center gap-5'>
                                <Image
                                    src="https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt='songs image'
                                    width={100}
                                    height={100}
                                />
                                <div>
                                    <p className='font-medium'>{song.artist}</p>
                                    <p className='text-sm text-gray-400'>{song.title}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-6 text-gray-400'>
                                <div className='flex items-center gap-1'>
                                    <Clock size={16} />
                                    <span>{song.time}</span>
                                </div>
                                <Heart size={16} className='cursor-pointer hover:text-red-700' />
                                <button className='text-gray-400'>⁝</button>
                            </div>
                        </li>
                    </Link>
                })}
            </ul>
        </div>
    )
}

export default SongsList
