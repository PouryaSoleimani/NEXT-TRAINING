import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleTodoComponent from './SingleTodoComponent';
import { useRouter as USEROUTER } from 'next/navigation';

type AllUsersType = [{ id: number, name: string, age: number, isToggle: boolean }]

interface UserProps { id: number, name: string, age: number, isToggle: boolean }

// COMPONENT ================================================================================================================================================
const JsonServerPage: React.FC<UserProps> = ({ id, age, name, isToggle }) => {
    const ROUTER = USEROUTER()

    const [myUser, setMyUser] = useState({ id: id, name: name, age: age, isToggle: isToggle })
    const [users, setusers] = useState<AllUsersType>([{ id: 0, name: '', age: 0, isToggle: true }])
    const [deleteID, setDeleteID] = useState<number | string>(0)
    const [updateID, setUpdateID] = useState<number | string>(0)
    const [updateAge, setUpdateAge] = useState<number | string>(0)

    // AXIOS.GET  ====================================================================================================================================================
    useEffect(() => {
        axios.get("http://localhost:4000/users")
            .then(data => setusers(data.data))
            .catch(err => console.error(err))
    }, [])
    // AXIOS.POST  ===================================================================================================================================================
    function postApi() {
        axios.post("http://localhost:4000/users", { id: "12", name: "alireza", age: 32 }, { headers: { "Content-Type": "application/json" } })
            .then(data => { console.info(data); ROUTER.refresh() })
    }
    // AXIOS.DELETE  =================================================================================================================================================
    function userDelete(id: number) {
        axios.delete(`http://localhost:4000/users/${Number(id)}`)
            .then(data => { console.info(data); ROUTER.refresh() })
            .catch(err => console.error(err))
    }
    // AXIOS.PUT  ====================================================================================================================================================
    function userUpdate(id: number, age: number) {
        const user = users.find(user => user.id == id); // Find the user object
        if (user) { setMyUser(user); }
        if (user) {
            axios.put(`http://localhost:4000/users/${id}`, { id: user.id, name: user.name, age: age }) // Spread the existing user object and update the age
                .then(() => ROUTER.refresh())
                .catch(err => console.error('Error updating user:', err));
        } else {
            console.error('User not found');
        }
    }
    // TOGGLE  ====================================================================================================================================================
    function toggleHandler(ID: number | string) {
        return () => {
            const user = users.find(user => user.id == ID); // Find the user object
            if (user) { setMyUser(user); }
            if (user) {
                axios.put(`http://localhost:4000/users/${ID}`, { id: user.id, name: user.name, age: user.age, isToggle: !user.isToggle }) // Spread the existing user object and update the age
                    .then(() => ROUTER.refresh())
                    .catch(err => console.error('Error updating user:', err));
            } else {
                console.error('User not found');
            }
        }
    }
    // RETURN ====================================================================================================================================================
    return (
        <div>
            <div>
                <h1 className='bg-zinc-800 text-cyan-500 text-3xl text-center font-bold p-4 w-full'>JSON SERVER</h1>
                <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
                    {users.length ?
                        users.map((user) => (<SingleTodoComponent key={user.id} id={user.id} name={user.name} age={user.age} isToggle={user.isToggle} />))
                        :
                        'Loading...'
                    }
                </div>
                <div className='flex justify-center'>
                    <button onClick={postApi} className='bg-zinc-900 text-cyan-500 p-2 px-4 rounded-md hover:bg-zinc-800'>Add User</button>
                </div>
                <form className='flex flex-col justify-center items-center gap-4 bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 w-[380px] mx-auto my-10 rounded-2xl border border-zinc-700/30' onSubmit={e => { e.preventDefault(); userUpdate(Number(updateID), Number(updateAge)) }}   >
                    <div className="w-full space-y-6">
                        <div className="relative">
                            <h2 className='absolute -top-3 left-4 px-2 bg-gradient-to-r from-zinc-800 to-zinc-900 text-cyan-400 text-sm font-medium'>User ID</h2>
                            <input type="text" value={updateID} onChange={e => setUpdateID(e.target.value)} className='w-full p-3 bg-zinc-800/50 rounded-xl border border-zinc-700/50 text-white font-medium outline-none focus:border-cyan-500/50 transition-all duration-300 shadow-inner' />
                        </div>

                        <div className="relative">
                            <h2 className='absolute -top-3 left-4 px-2 bg-gradient-to-r from-zinc-800 to-zinc-900 text-cyan-400 text-sm font-medium'>User Age</h2>
                            <input type="text" value={updateAge} onChange={e => setUpdateAge(e.target.value)} className='w-full p-3 bg-zinc-800/50 rounded-xl border border-zinc-700/50 text-white font-medium outline-none focus:border-cyan-500/50 transition-all duration-300 shadow-inner' />
                        </div>
                    </div>

                    <button type='submit' className='mt-6 w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-medium rounded-xl shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-0.5 transition-all duration-300'  >
                        Update User
                    </button>
                </form>

                <form onSubmit={(e) => { e.preventDefault(); userDelete(Number(deleteID)); }} className='flex flex-col justify-center items-center gap-2 bg-zinc-800 p-5 w-fit mx-auto my-10 rounded-lg'>
                    <input type="text" value={deleteID} onChange={(e) => { setDeleteID(Number(e.target.value)) }} className='p-2 border border-black rounded-xl' />
                    <button type='submit' className='btn btn-danger'>DELETE</button>
                </form>

            </div>
        </div>
    )
}

export default JsonServerPage