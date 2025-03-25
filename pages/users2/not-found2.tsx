import { Button } from 'antd';
import { FileWarning } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react';


const NotFound2 = () => {
    const router = useRouter();

    function goBackUsersHanlder() { router.push('/users2'); }

    return (
        <section className="w-screen h-screen flex items-center justify-center flex-col bg-gradient-to-br from-zinc-900 via-black to-zinc-800 relative overflow-hidden">

            {/* Glassmorphism Card */}
            <div className="flex items-center justify-center p-8 rounded-3xl my-6 text-white gap-x-6 bg-white/10 backdrop-blur-md shadow-2xl w-fit border border-red-800">
                <FileWarning className="text-red-500 w-10 h-10 animate-bounce" />
                <h2 className="text-2xl font-extrabold tracking-wider uppercase text-gray-200">   User Not Found</h2>
            </div>

            {/* Button */}
            <Button type="primary" onClick={goBackUsersHanlder} className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-xl px-8 py-3 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer" >
                Go to All Users
            </Button>
        </section>
    );
};

export default NotFound2;