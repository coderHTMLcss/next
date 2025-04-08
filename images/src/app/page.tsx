import GtiImage from '../../public/imad-sidki-X6w0LHQbh6Q-unsplash.jpg';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen gap-2'>
      <Image
        alt='Gti Image'
        src={GtiImage}
        width={500}
        height={500}
        className='rounded-lg'
      />
      <Image
        src='https://images.unsplash.com/photo-1564988190342-4976fa6445c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Gti Image'
        width={500}
        height={500}
      />
    </div>
  );
};

export default Home;
