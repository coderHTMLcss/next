import { Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

const Player = () => {
  return (
    <div className='fixed bottom-0 left-[35%] w-[40rem] bg-[#171717] p-4
     flex items-center justify-between text-white rounded-t-md shadow-lg'>
      <div className="w-16 h-16 bg-gray-700 rounded-md relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1453738773917-9c3eff1db985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="songs image"
          fill
          className="object-cover"
        />
      </div>
      <div className='flex items-center gap-6'>
        <SkipBack size={24} className='cursor-pointer hover:text-gray-400' />
        <Play size={24} className='cursor-pointer hover:text-gray-400' />
        <Pause size={24} className='cursor-pointer hover:text-gray-400' />
        <SkipForward size={24} className='cursor-pointer hover:text-gray-400' />
      </div>

      <div className='flex items-center gap-4 text-gray'>
        <span>2:21</span>

        <div className='relative w-64 h-1 bg-gray-700 rounded-md'>
          <div
            className='absolute top-0 left-0 h-1 bg-gray-400 rounded-md'
            style={{ width: '50%' }}
          />
          <input
            type="range"
            className='absolute top-0 left-0 w-full h-1 bg-transparent cursor-pointer'
          />
        </div>
        <span>3:1</span>
      </div>
    </div>
  );
};

export default Player;
