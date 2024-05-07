import { useRouter } from 'next/router'
import React from 'react'


const SpecialCourse: React.FC = () => {
 const router = useRouter()
 const path = router.query.shortName

 return (
  <>
   <div className='font-bold h-screen bg-zinc-950 flex  items-center underline justify-center text-6xl'> -- {path?.toString().toUpperCase()} -- </div>
  </>
 )
}

export default SpecialCourse