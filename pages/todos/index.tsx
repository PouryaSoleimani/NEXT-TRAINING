import axios from 'axios'
import React, { useEffect, useState } from 'react'

type SingleTodoType = { id: number, title: string, isCompleted: boolean }

const TodosPage = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get('/api/todos').then(response => setTodos(response.data.todos))
  }, [])


  return (
    <div className='flex items-center justify-center flex-col h-screen text-4xl font-bold text-center space-y-6'>
      {todos.map((todo: SingleTodoType) => (
        <h1 key={todo.id} className='bg-zinc-700 px-2 w-[17rem] py-2 rounded-lg'>{todo.title}</h1>
      ))}
    </div>
  )
}

export default TodosPage