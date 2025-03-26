import { Card } from 'antd';
import { NextPage, GetServerSideProps } from 'next';

interface Props { data: [{ id: number; name: string; username: string; email: string }]; }
type SingleUserType = { id: number; name: string; username: string; email: string };

// COMPONENT  ==================================================================================================================================
const SSR2: NextPage<Props> = ({ data }) => {
    return (

        <div className="flex w-screen min-h-screen p-12 gap-8 flex-wrap items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800">
            {data.map((user: SingleUserType) => (
                <div key={user.id} className="relative w-72 h-48 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-500 border border-gray-700 overflow-hidden"   >
                    {/* Decorative Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg -z-10"></div>
                    {/* Floating Particles */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="animate-float-slow absolute top-2 left-2 w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
                        <div className="animate-float-medium absolute top-8 right-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-30"></div>
                        <div className="animate-float-fast absolute bottom-4 left-1/2 w-1 h-1 bg-pink-400 rounded-full opacity-20"></div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    {/* Content */}
                    <h2 className="text-2xl font-semibold text-white mb-2">{user.name}</h2>
                    <p className="text-slate-100 bg-slate-900/80 w-44 text-center py-1 rounded-xl font-bold">{user.username}</p>
                    <h4 className="text-sm text-gray-300 font-semibold">{user.email.slice(0, 15)}</h4>

                    {/* Bottom Border Animation */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
            ))}
        </div>

    );
};

// GET SERVERS SIDE PROPS ==================================================================================================================================
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const req = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await req.json();

    return {
        props: { data },
    };
};

export default SSR2;