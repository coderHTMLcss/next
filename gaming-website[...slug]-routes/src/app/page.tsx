"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/games");
  }
  return (
    <div className=" mx-auto p-6 h-screen flex flex-col items-center justify-center
     bg-gray-900 text-white">
      <h1 className="text-4xl text-white font-extrabold mb-5">Explore All Games</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow-lg
         shadow-blue-600 cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out"
        onClick={handleClick}
      >
        Go to Games
      </button>
    </div>
  );
};

export default Home;
