import { NextPage, GetStaticProps } from 'next'

interface Props {
  data: [{ id: number, title: string, price: number }]
}
type SingleItemType = { id: number, title: string, price: number }

const Test: NextPage<Props> = ({ data }) => {
  return (
    <div className="p-6 font-sans bg-zinc-900 min-h-screen">
      {data.map((item) => (
        <div key={item.id} className="border border-zinc-300 rounded-lg p-4 mb-4 shadow-lg bg-black hover:shadow-xl transition-shadow text-white w-96 text-center text-4xl">
          <h3 className="text-5xl font-semibold text-zinc-100 mb-8">
            {item.title}
          </h3>
          <p className="text-blue-400">
            Price: <strong className="text-zinc-100">${item.price.toFixed(2)}</strong>
          </p>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = [
    { id: 1, title: 'First Item', price: 100 },
    { id: 2, title: 'Second Item', price: 200 },
    { id: 3, title: 'Third Item', price: 300 },
    { id: 4, title: 'Fourth Item', price: 400 },
  ]
  return {
    props: { data: data },
  }
}

export default Test