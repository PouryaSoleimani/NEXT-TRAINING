import Link from 'next/link'
import React from 'react'

const DynamicLinksPage = () => {
    const courses = [
        { id: 1, title: 'REACT', link: '/dynamic-links/react' },
        { id: 1, title: 'NEXT', link: '/dynamic-links/next' },
        { id: 1, title: 'NODE', link: '/dynamic-links/node' },
        { id: 1, title: 'PWA', link: '/dynamic-links/pwa' },
        { id: 1, title: 'MONGODB', link: '/dynamic-links/mongodb' },
        { id: 1, title: 'EXPRESS', link: '/dynamic-links/express' },
    ]
    return (
        <div className='w-screen h-screen flex flex-col gap-y-10 mt-10 items-center juftify-center bg-black text-white px-10'>
            <h1 className='text-5xl font-black'>Dynamic Links Page</h1>
            <ul className='w-[80%] flex flex-wrap gap-x-10 gap-y-10 justify-center items-center bg-zinc-900 p-10 border-2 border-zinc-600 rounded-2xl'>
                {courses.map(course => (
                    <li key={course.id} className='bg-zinc-700 no-underline text-white p-4 text-3xl font-bold rounded-xl hover:scale-105 duration-300'>
                        <Link href={course.link} className='no-underline text-white font-bold'>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default DynamicLinksPage