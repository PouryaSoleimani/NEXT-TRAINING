//^ CSR2 =============================================================================================================================================
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
type SingleTodoType = { id: number, title: string, completed: boolean }



// COMPONENT =============================================================================================================================================
const CSR2 = () => {
    const [todos, setTodos] = useState<SingleTodoType[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }, [])

    function TodoCompleteToggler(ID: number) {
        const TODO = todos.find((todo: SingleTodoType) => todo.id == ID) // First we find the Todo we want to toggle
        if (!TODO) return
        const NEW_TODO: SingleTodoType = { ...TODO, completed: !TODO.completed } // Then we create a new Todo with the opposite value of the completed property
        const NEW_TODOS: SingleTodoType[] = todos.map((todo: SingleTodoType) => todo.id == ID ? NEW_TODO : todo) // Then we map through the todos and replace the old Todo with the new one
        setTodos(NEW_TODOS) // Finally we set the new Todos
    }

    // RETURN ================================================================================================================================================
    return (
        <>
            <h1 className='bg-zinc-800 text-cyan-500 text-3xl text-center font-bold p-4 w-full'>CRS RENDERING - CSR2.TSX</h1>
            <div className='flex flex-wrap items-center justify-center gap-4 p-5'>
                {todos.length ?
                    todos.map((todo: SingleTodoType) => (
                        <div className='flex flex-col rounded-b-none'>
                            <Link href={`/csr2/${todo.id}`} className='card w-[20rem] h-[20rem]  mx-auto ' key={todo.id}>
                                <h1 className='w-full text-center bg-black text-white font-bold'>{todo.id}</h1>
                                <h2 className='tracking-tighter '>{todo.title.slice(0, 20)}</h2>
                                <p className='text-center w-full mt-2'>{todo.completed ? <span className='text-green-900 bg-green-300 p-2 font-bold text-xl'>COMPLETED</span> : <span className='text-red-900 bg-red-300 p-2 font-bold text-xl'>NOT COMPLETED</span>}</p>
                            </Link>
                            <button className='btn btn-warning font-black' onClick={event => TodoCompleteToggler(todo.id)}>TOGGLE</button>
                        </div>
                    ))
                    :
                    'Loading...'
                }
            </div>
        </>
    )
}

export default CSR2