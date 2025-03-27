import axios from 'axios';
import Link from 'next/link'
import React from 'react'
import { useRouter as USEROUTER } from "next/navigation"



interface SingleTodo { id: number, name: string, age: number, isToggle: boolean }
const SingleTodoComponent: React.FC<SingleTodo> = ({ id, name, age, isToggle }) => {


    const ROUTER = USEROUTER()


    function toggleHandler(ID: number | string) {
        return () => {
            axios.put(`http://localhost:4000/users/${ID}`, { id: id, name: name, age: age, isToggle: !isToggle }) // Spread the existing user object and update the age
                .then(() => ROUTER.refresh())
                .catch(err => console.error('Error updating user:', err));

        }
    }
    // RETURN  ====================================================================================================================================================
    return (
        <>
            <div key={id} className='relative flex flex-col bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 m-4 rounded-2xl backdrop-blur-sm border border-white/10 shadow-[4px_4px_10px_rgba(0,0,0,0.4),-4px_-4px_10px_rgba(255,255,255,0.1)]           hover:shadow-[8px_8px_20px_rgba(0,0,0,0.4),-8px_-8px_20px_rgba(255,255,255,0.1)] space-y-4 hover:scale-105 transition-all duration-300 group w-[18rem]'   >
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                    <h1 className='text-white font-bold text-2xl rounded-md'>{`ID: ${id}`}</h1>
                </div>

                <h2 className='text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-center mt-4 mb-2'>
                    {name}
                </h2>

                <div className='bg-black/30 rounded-xl p-3 mb-3'>
                    <p className='text-center text-3xl font-black text-white/90'>
                        {age} <span className='text-sm font-normal text-white/60'>years</span>
                    </p>
                </div>

                <div className='relative flex items-center justify-center mb-4'>
                    <p className={`text-5xl transition-transform duration-300 ${isToggle ? 'scale-110' : 'scale-90'}`}>
                        {isToggle ? "🟩" : "🟥"}
                    </p>
                </div>
                <button className='btn btn-warning mx-auto w-fit -translate-y-8 font-extrabold' onClick={toggleHandler(id)}>TOGGLE</button>
            </div >
        </>
    )
}

export default SingleTodoComponent