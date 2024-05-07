import React from 'react'

const userinfo: React.FC = () => {

 const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { console.log(`CLICK CLICK`) }

 return (
  <>
   <h1>userinfo</h1>
   <button onClick={clickHandler} className='p-3 bg-sky-700 rounded-xl'>CLICK ME</button>
  </>
 )
}

export default userinfo