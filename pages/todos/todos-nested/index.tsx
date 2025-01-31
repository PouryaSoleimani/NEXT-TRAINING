import Link from 'next/link'
import React from 'react'

const TodosNestedPage = () => {
  return (
    <div className='w-screen h-screen flex flex-col gap-y-10 items-center justify-center'>
      <h1 className='font-black text-7xl text-white bg-zinc-800 p-3 rounded-xl'>  Todos Nested Page </h1>
      <Link href="/todos/todos-nested/nested-2" className='no-underline text-4xl bg-slate-700 p-4 text-orange-400 font-black rounded-xl hover:scale-125 duration-300'>NESTED 2</Link>
    </div>
  )
}

export default TodosNestedPage