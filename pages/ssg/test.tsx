import { NextPage, GetStaticProps } from 'next'

interface Props { data: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }

const Test: NextPage<Props> = ({ data }) => {
  return (
    <div>
      {data.map(item =>
        <div key={item.id}>
          {item.title} - ${item.price}
        </div>
      )}
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