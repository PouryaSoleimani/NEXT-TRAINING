import React from 'react'
import useSWR from 'swr'


// COMPONENT =====================================================================================================================
const swr2 = () => {

    // SWR HOOK 
    function fetcher() { return fetch("http://localhost:4000/usersFarsi").then((res) => res.json()) }

    const { data, error, isLoading } = useSWR('http://localhost:4000/usersFarsi', fetcher)

    if (error) return <div className='bg-red-900 text-white p-3 font-black'>failed to load</div>
    if (isLoading) return <div className='bg-blue-900 text-white p-3 font-black'>loading...</div>


    // RETURN
    return (
        <div className='grid grid-cols-3 gap-4 p-10 swr2'>
            {data.map((item: any) => (
                <div key={item.id} className='bg-zinc-200 hover:bg-white text-black px-4 py-5 my-2 rounded-md w-[30rem]'>
                    <h1 className='text-black text-lg font-black'>{item.name.toUpperCase()}</h1>
                    <h1 className='text-black text-lg font-black'>{item.age}</h1>
                </div>
            ))}
        </div>
    )
}

export default swr2