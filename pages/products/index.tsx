//^ PRODUCTS PAGE (FRONT-END) ======================================================================================================================================
import axios from 'axios'
import React, { useEffect, useState } from 'react'
type SingleItemType = { id: number, title: string, price: number }

//COMPONENT =====================================================================================================================================================
const ProductsPage = () => {

  const [Users, setUsers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then(response => setUsers(response.data))
  }, [])

  // RETURN 
  return (
    <section className='w-screen h-screen flex items-center justify-center flex-col space-y-4 overflow-hidden'>
      <h1 className='text-4xl font-extrabold text-orange-500 bg-zinc-800/40 px-24 py-4 rounded-lg'>Users</h1>
      <div className='flex items-center justify-center font-bold text-3xl flex-col space-y-4'>
        {Users?.map((item: SingleItemType) => (
          <div key={item.id} className='flex flex-col items-start justify-center space-y-2 w-[40rem] text-start bg-zinc-900 p-2 rounded-md'>
            <h1>{item.id} - {item.name} - <span className='bg-emerald-800/80 px-2 rounded-md'>  {item.age}</span></h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductsPage 