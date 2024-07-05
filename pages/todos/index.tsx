// TODOS PAGE (FRONT-END) ===========================================================================================================================================================
import axios from 'axios'
import React, { useEffect, useState } from 'react'

type SingleTodoType = { id: number, title: string, isCompleted: boolean }

const TodosPage = () => {
  const [ todos, setTodos ] = useState([])
  const [ isCompleted, setIsCompleted ] = useState(false)

  useEffect(() => {
    axios.get('/api/todos').then(response => setTodos(response.data.todos))
  }, [])

  function toggleCompleted() { setIsCompleted(prev => !prev) }


  return (
    <div className='flex items-center justify-center flex-col h-screen text-4xl font-bold text-center space-y-6'>
      {todos.map((todo: SingleTodoType) => (
        <h1 onClick={toggleCompleted} key={todo.id} className={`bg-zinc-900 px-2 w-[20rem] py-3  rounded-lg border-8 ${isCompleted ? "border-emerald-700" : "border-red-700"}`}>{todo.title}</h1>
      ))}
    </div>
  )
}

export default TodosPage