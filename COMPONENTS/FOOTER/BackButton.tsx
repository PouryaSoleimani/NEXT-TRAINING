import { Button, Tooltip } from 'antd'
import { ArrowBigLeft } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'

const BackButton = () => {
   const router = useRouter()
   function goBackHandler() { router.back() }

   return (
      <Tooltip title="Back" >
         <Button onClick={goBackHandler} type="primary" icon={<ArrowBigLeft  className='w-5 h-5' />} className='tracking-tighter font-bold'>BACK</Button>
      </Tooltip>
   )
}

export default BackButton