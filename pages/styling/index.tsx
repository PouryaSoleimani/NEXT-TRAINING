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
import styles from '@/styles/styling.module.css'

import React from 'react'

const Styling = () => {
  return (
    <div>
      <h1 id='stylingTitle'>STYLING PAGE</h1>
      <h2 className={styles.stylingText}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed nostrum, exercitationem laudantium suscipit animi cum velit voluptates assumenda quibusdam nemo vitae eligendi modi, aliquam reiciendis similique dolorum consequatur nulla! Ab?</h2>
    </div>
  )
}

export default Styling 