// //^ DATA-FETCHING PAGE =========================================================================================================================================================
// import React, { useState } from 'react'
// import { products } from '@/data/db.json' //Importing DataBase From an External File

// // COMPONENT
// const DataFetching = () => {
//   const [data, setdata] = useState(products)

//   // RETURN
//   return (
//     <div>
//       <h1 className='text-yellow-400 text-6xl font-bold text-center py-4'>DATA FETCHING PAGE</h1>
//       <div className='bg-zinc-700 flex flex-col px-10 py-5 space-y-5 text-2xl font-semibold'>
//         {data.map((item) => <p key={item.id}>{item.title} - ${item.price}</p>)}
//       </div>
//     </div>
//   )
// }
// export default DataFetching

