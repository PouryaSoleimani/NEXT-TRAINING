//^ SORT PAGE
import React, { useEffect, useState } from 'react'
import db from '@/data/db.json'

const Sort: React.FC = () => {
    //STATES
    const [PRODUCTS, setPRODUCTS] = useState([...db.products])
    const [Sort, setSort] = useState('')

    //FUNCTIONS
    const sortAscending = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const sortedProducts = db.products.sort((a, b) => a.views - b.views)
        setSort(`Ascending`)
        setPRODUCTS(sortedProducts)
    }
    
    const sortDescending = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const sortedProducts = db.products.sort((a, b) => a.views + b.views)
        setSort(`Descending`)
        setPRODUCTS(sortedProducts)
    }

    //RETURN
    return (
        <>

            <div className='w-full my-10 bg-zinc-300 h-fit grid place-items-center p-4 grid-cols-3 gap-y-10'>
                {PRODUCTS.map(product => (
                    <div key={product.id} className='bg-zinc-950 w-[17rem] py-8 px-4 font-bold text-2xl text-center rounded-md '>
                        <h2>{product.title} - {product.views}</h2>
                    </div>
                ))}
            </div>
            <div id='BUTTONS' className='bg-slate-700 p-10 text-3xl font-bold flex items-center justify-evenly'>
                <button className='bg-green-500 p-4 rounded-md border-8 text-black border-black cursor-pointer' onClick={sortAscending}>Ascending</button>
                <button className='bg-rose-500 p-4 rounded-md border-8 text-black border-black cursor-pointer' onClick={sortDescending}>Descending</button>
            </div>

        </>

    )
}

export default Sort