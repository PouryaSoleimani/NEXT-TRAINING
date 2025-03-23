import { NextPage, GetStaticProps } from 'next'

interface Props { data: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }

const Index: NextPage<Props> = ({ data }) => {
   return (
      <div>
         <h1 className="text-3xl font-semibold text-zinc-100 mb-4 text-center bg-red-900 py-3 border-y-8 border-zinc-800">Item List</h1>

         <div className="grid grid-cols-3 justify-items-center gap-10 px-10 py-1">
            {data.map((item) => (
               <div key={item.id} className="border-4 border-emerald-900 bg-zinc-900 rounded-lg p-4 mb-4 shadow-lg hover:shadow-xl transition-shadow text-white w-96 text-center text-3xl">
                  <h1 className="text-4xl font-semibold text-zinc-100 mb-4">{item.title}</h1>
                  <p className="text-blue-400">${item.price.toFixed(2)}</p>
                  <button className="mt-4 bg-black tracking-tight text-lg font-black text-white py-2 px-4 rounded">View Details</button>
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
      { id: 4, title: 'Fourth Item', price: 400 },
      { id: 5, title: 'Fifth Item', price: 500 },
   ]
   return {
      props: { data: data },
   }
}

export default Index