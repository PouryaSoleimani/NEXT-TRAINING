//^ STYLINGS PAGE =================================================================================================================================
//& TUTORIAL
// STYLING IN NEXT JS :
// 1 - GLOBAL CSS
// 2 - CSS MODULES
// 3 - TAILWIND CSS
// 4 - SASS
// 5 - CSS-IN-JS

// 1 - GLOBAL CSS FILES AT _app.tsx
// 2 - CSS MODULES : 
// 3 - CSS-IN-JS : STYLED.JSX or STYLED.COMPONENTS

import styles from '@/styles/styling.module.css'

import React from 'react'

const Styling = () => {
  return (
    <div>
      <h1 id='stylingTitle'>STYLING PAGE</h1>
      <h2 className={styles.stylingText}>Lorem ipsum, dolor sit amet  modi, aliquam reiciendis similique dolorum consequatur nulla! Ab?</h2>
      <button>CLICK ME
        <style jsx>
          {`
          button{
          background-color : green ;
          padding : 1rem 2rem;
          font-size : 30px;
          font-weight : 800;
          border : 6px solid white ;
          border-radius : 30px;
          margin : 0 auto;
          width : 100%;
          cursor : pointer;
          }
          button:hover{
          background-color : #004400
          }
          `}
        </style>
      </button>
    </div>
  )
}

export default Styling 