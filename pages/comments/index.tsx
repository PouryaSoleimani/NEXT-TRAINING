//^ COMMENTS PAGE ======================================================================================================================================================================
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import { useState } from 'react'

interface Props { comments: [{ postId: number, id: number, name: string, email: string, body: string }] }


//^ COMPONENT =>
const Index: NextPage<Props> = ({ comments }) => {

  const [COMMENTS, setCOMMENTS] = useState(comments)

  function filterCommentHandler(ID: number) {
    const copy = [...comments]
    const filteredComments: any = copy.filter(item => { return item.postId === ID })
    setCOMMENTS(filteredComments)
  }

  //* RETURN =======================================================================================================================================================================>
  return (
    <>
      <div className='flex items-center justify-around px-2 py-3'>
        <button onClick={event => filterCommentHandler(1)} className='border rounded-md text-black font-bold text-xl border-black px-2 w-[10rem] bg-red-500'>1</button>
        <button onClick={event => filterCommentHandler(2)} className='border rounded-md text-black font-bold text-xl border-black px-2 w-[10rem] bg-blue-500'>2</button>
        <button onClick={event => filterCommentHandler(3)} className='border rounded-md text-black font-bold text-xl border-black px-2 w-[10rem] bg-green-500'>3</button>
        <button onClick={event => filterCommentHandler(4)} className='border rounded-md text-black font-bold text-xl border-black px-2 w-[10rem] bg-pink-500'>4</button>
        <button onClick={event => filterCommentHandler(5)} className='border rounded-md text-black font-bold text-xl border-black px-2 w-[10rem] bg-yellow-400'>5</button>
      </div>

      <div className='flex flex-wrap items-center justify-center p-6 gap-3'>
        {COMMENTS.map(item => (
          <div key={item.id} className='flex flex-col space-y-2 bg-zinc-800 w-fit text-zinc-200 items-start rounded-md justify-center p-2 hover:scale-105 duration-300'>
            <h1 className='text-lg font-bold'>{item.name.slice(0, 20).toUpperCase()} : </h1>
            <h4 className='text-sm text-zinc-500 font-thin'>{item.email}</h4>
            <h4 className='flex items-center justify-start space-x-6'>For post : <span className='text-xl font-extrabold bg-blue-900 px-2 text-white rounded-md ml-2'>{item.postId}</span> </h4>
            <span className='bg-white text-black w-[14rem] h-[14rem] overflow-auto'>
              <p className='whitespace-pre-wrap px-2 py-1'>{item.body.slice(0, 130)}...</p>
            </span>
          </div>
        ))}
      </div>
    </>
  )
}

//^ GET STATIC PROPS ===========================================================================================>

export const getStaticProps: GetStaticProps = async (ctx) => {
  const req = axios.get('https://jsonplaceholder.typicode.com/comments')
  const comments = (await req).data

  return {
    props: { comments: comments },
  }

}

export default Index