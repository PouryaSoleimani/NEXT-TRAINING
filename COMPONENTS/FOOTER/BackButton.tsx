import { Button, Tooltip } from 'antd'
import { StepBack } from 'lucide-react'
import { useRouter } from 'next/router'
import React from 'react'

const BackButton = () => {
   const router = useRouter()
   function goBackHandler() { router.back() }

   return (
      <Tooltip title="Back" >
         <Button onClick={goBackHandler} type="primary" icon={<StepBack className='w-5 h-5' />} className='tracking-tighter'>BACK</Button>
      </Tooltip>
   )
}

export default BackButton