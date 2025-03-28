import React, { useState } from 'react'
import axios from 'axios';
import { useRouter as USEROUTER } from "next/navigation"
interface SingleTodo { id: number, name: string, age: number, isToggle: boolean }


//  COMPONENT ================================================================================================================================================
const SingleTodoComponent: React.FC<SingleTodo> = ({ id, name, age, isToggle }) => {

    const ROUTER = USEROUTER()
    const [user, setUser] = useState({ id: id, name: name, age: age, isToggle: isToggle })

    function toggleHandler(ID: number | string) {
        return () => {
            axios.put(`http://localhost:4000/users/${ID}`, { id: id, name: name, age: age, isToggle: !user.isToggle }) // Spread the existing user object and update the age
                .then((data) => { setUser(data.data) })
                .catch(err => console.error('Error updating user:', err));
        }
    }
    // RETURN  ====================================================================================================================================================
    return (
        <>
            <div key={id} className='relative flex flex-col bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 m-4 rounded-2xl backdrop-blur-sm border border-white/10  hover:shadow-[8px_8px_20px_rgba(0,0,0,0.4),-8px_-8px_20px_rgba(255,255,255,0.1)] space-y-4 hover:scale-105 transition-all duration-300 group w-[18rem] h-[22rem]'   >
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg'>
                    <h1 className='text-white font-bold text-3xl rounded-md'>{`ID: ${user.id}`}</h1>
                </div>

                <h2 className='text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-center mt-4 mb-2'>
                    {user.name}
                </h2>

                <div className='bg-black/30 rounded-xl p-3 mb-3'>
                    <p className='text-center text-5xl font-black text-white/90'>
                        {user.age} <span className='text-xl font-normal text-white/60'>years old</span>
                    </p>
                </div>

                <div className='relative flex items-center justify-center mb-4'>2
                    <p className={`text-5xl transition-transform duration-300 ${isToggle ? 'scale-110' : 'scale-90'}`}>
                        {user.isToggle ? "🟩" : "🟥"}
                    </p>
                </div>
                <button className='bg-orange-500 p-3 rounded-xl text-white mx-auto -translate-y-8 font-bold w-full' onClick={toggleHandler(id)}>TOGGLE</button>
            </div >
        </>
    )
}

export default SingleTodoComponent