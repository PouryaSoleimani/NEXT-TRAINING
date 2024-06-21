import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'

interface Props { comments: [{ postId: number, id: number, name: string, email: string, body: string }] }

const Index: NextPage<Props> = ({ comments }) => {
  return (
    <div className='flex flex-wrap items-center justify-center p-4 gap-2'>
      {comments.map(item => (
        <div key={item.id} className='flex flex-col space-y-2 bg-zinc-800 w-fit text-zinc-200 items-start p-2 rounded-md justify-center'>
          <h1 className='text-xl font-bold'>{item.name.slice(0, 20)} : </h1>
          <h4 className='text-sm text-zinc-500 font-thin'>{item.email}</h4>
          <h4>For post # {item.postId}</h4>
          <span className='bg-white text-black w-[14rem] h-[14rem] overflow-auto'>
            <p className='whitespace-pre-wrap px-2 py-1'>{item.body}...</p>
          </span>
        </div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get('https://jsonplaceholder.typicode.com/comments')
  const comments = (await req).data
  return {
    props: { comments },
  }
}

export default Index