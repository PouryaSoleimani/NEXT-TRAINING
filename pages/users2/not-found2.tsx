import { Button } from 'antd';
import { FileWarning } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';

const NotFound2 = () => {
    const router = useRouter();

    function goBackUsersHanlder() { router.push('/users2'); }

    return (
        <section className="w-screen h-screen flex items-center justify-center flex-col bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 ">
                <Image src="/NEW___PICS/404_page_cover.jpg" alt="Background" width={1500} height={700} className="opacity-30" />
            </div>

            {/* Glassmorphism Card */}
            <div className="flex items-center justify-center p-8 rounded-3xl my-6 text-white gap-x-6 bg-white/10 backdrop-blur-md shadow-2xl w-fit border border-red-800">
                <FileWarning className="text-red-500 w-10 h-10 animate-bounce" />
                <h2 className="text-2xl font-extrabold tracking-wider uppercase text-gray-200">   User Not Found</h2>
            </div>

            {/* Decorative Image */}
            <div className="absolute bottom-10 right-10">
                <Image src="/NEW___PICS/not-found.png" alt="Not Found Icon" width={100} height={100} className="opacity-80" />
            </div>

            {/* Button */}
            <Button type="primary" onClick={goBackUsersHanlder} className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-full px-8 py-3 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer" >
                Go to All Users
            </Button>
        </section>
    );
};

export default NotFound2;