import { Clock, Home, TrendingUp } from "lucide-react";
import Image from "next/image";


const Sidebar = async () => {
    return (
        <aside className="fixed top-0 left-0 w-[20%] flex-1/2 mr-auto h-screen bg-[#121212] p-6 text-white overflow-y-auto">
            <section>
                <h2 className="text-xl font-bold">Menu</h2>
                <nav className="mt-4">
                    <ul>
                        <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md
                         cursor-pointer">
                            <Home /> Discover
                        </li>
                        <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md
                         cursor-pointer">
                            <TrendingUp /> Trending
                        </li>
                        <li className="flex items-center gap-2 p-2 hover:bg-[#171717] rounded-md
                         cursor-pointer">
                            <Clock /> Recent
                        </li>
                    </ul>
                </nav>
            </section>

            <section>
                <h2 className="mt-6 text-xl font-bold">FAVORITE</h2>
                <ul className="mt-2 mb-[2rem]">
                    {Array.from({ length: 5 }).map((_, index) => {
                        return <div key={index} className="flex mt-[2rem] gap-4">
                            <Image
                                src="https://images.unsplash.com/photo-1542355365-6df0e84f06ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="images"
                                width={60}
                                height={60}
                                className="bg-gray-300 rounded-md"
                            />
                            <div>
                                <p className="text-white">Random</p>
                                <p className="text-sm text-gray-400">Person</p>
                            </div>
                        </div>
                    })}
                </ul>
            </section>
        </aside>
    );
};

export default Sidebar;
