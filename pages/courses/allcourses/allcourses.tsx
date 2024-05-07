import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const allcourses: React.FC = () => {

 const router = useRouter()

 const myCourses = [
  { id: 1, title: 'REACT JS ', shortname: 'react' },
  { id: 2, title: 'NODE JS ', shortname: 'node' },
  { id: 3, title: 'EXPRESS JS', shortname: 'express' },
  { id: 4, title: 'NEXT JS', shortname: 'next' },
 ]

 const goBackHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => { router.back() }
 const redirectHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => { router.push('/') }



 // RETURN =========================================================================================================================
 return (
  <>
   <h1>ALL COURSES :</h1>
   <ul className='bg-zinc-700 grid grid-cols-2 py-3 px-3 rounded-md w-fit mx-auto '>

    {myCourses.map(course => (
     <li key={course.id} className='hover:bg-black p-4 rounded-sm'>
      <Link href={`/courses/allcourses/${course.shortname}`}>{course.title}</Link>
     </li>
    ))}

   </ul>

   <div className='flex items-center justify-center mt-4 rounded-md'>
    <button onClick={goBackHandler} className='p-2 bg-zinc-700 text-black font-bold text-3xl mx-auto'>⬅ BACK</button>b
    <button onClick={redirectHandler} className='p-2 bg-zinc-700 text-black font-bold text-3xl mx-auto'> HOME</button>
   </div>

  </>
 )
}

export default allcourses