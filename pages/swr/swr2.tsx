import React from 'react'
import useSWR from 'swr'


// COMPONENT =====================================================================================================================
const swr2 = () => {

    // SWR HOOK 
    async function fetcher() { return fetch("http://localhost:4000/usersFarsi").then((res) => res.json()) }

    const { data, error, isLoading } = useSWR('http://localhost:4000/usersFarsi', fetcher)

    if (error) return <div className='bg-red-900 text-white p-3 font-black'>failed to load</div>
    if (isLoading) return <div className='bg-blue-900 text-white p-3 font-black'>loading...</div>


    // RETURN
    return (
        <div className='grid grid-cols-3 gap-4 p-10 swr2'>
            {data.map((item: any) => (
                <div key={item.id} className='bg-white opacity-30 hover:opacity-100 hover:-translate-y-2 text-end text-black px-4 py-5 my-2 rounded-md w-[30rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out'>
                    <h5 className='text-black text-5xl'>{item.name.toUpperCase()}</h5>
                    <h5 className='text-black text-2xl'>{item.age}</h5>

                </div>
            ))}
        </div>
    )
}

export default swr2