//^ PRODUCTS PAGE (FRONT-END) ======================================================================================================================================
import axios from 'axios'
import React, { useEffect, useState } from 'react'
type SingleItemType = { id: number, title: string, price: number }

//COMPONENT =====================================================================================================================================================
const ProductsPage = () => {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/products")
      .then(response => setProducts(response.data.products.slice(0, 5)))
  }, [])

  // RETURN 
  return (
    <section className='w-screen h-screen flex items-center justify-center flex-col space-y-4 overflow-hidden'>
      <h1 className='text-4xl font-extrabold text-orange-500 bg-zinc-800/40 px-24 py-4 rounded-lg'>PRODUCTS</h1>
      <div className='flex items-center justify-center font-bold text-3xl flex-col space-y-4'>
        {products?.map((item: SingleItemType) => (
          <div key={item.id} className='flex flex-col items-center justify-center space-y-2 w-[24rem] bg-zinc-900 px-2 py-2 rounded-md'>
            <h1>{item.id} - {item.title} - <span className='bg-emerald-800/80 px-2 rounded-md'> $ {item.price}</span></h1>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductsPage 