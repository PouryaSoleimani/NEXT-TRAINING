import { NextPage, GetStaticProps } from 'next'

interface Props { data: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }

const Index: NextPage<Props> = ({ data }) => {
   return (
      <div>
         <h1 className='text-5xl font-extrabold bg-slate-900 text-center py-4 text-white'>SSG TEST PAGE</h1>
         <div className='flex items-center justify-around flex-wrap'>
            {data.map(item => (
               <div key={item.id} className='bg-zinc-700 border-4 border-red-800 w-96 p-4 rounded-xl m-4 text-white font-bold flex flex-col items-center text-2xl'>
                  <h2 className='text-4xl'>{item.title}</h2>
                  <p>Price: ${item.price}</p>
               </div>
            ))}
         </div>
      </div>
   )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
   const data = [
      { id: 1, title: 'First Item', price: 100 },
      { id: 2, title: 'Second Item', price: 200 },
      { id: 3, title: 'Third Item', price: 300 },
   ]
   return {
      props: { data: data },
   }
}

export default Index