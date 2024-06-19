//^ CSR INDEX PAGE ===============================================================================================================================================
import { NextPage, GetStaticProps } from 'next'

interface Props { }

const Index: NextPage<Props> = ({ }) => {
  return (
    <div>
      <h1 className='bg-zinc-800 text-cyan-500 text-3xl text-center font-bold p-4'>CRS RENDERING - INDEX.TSX</h1>
    </div>
  )
}

export default Index

// CSR (Client-Side-Rendering) In NEXT.js is Like REACT.JS , we fetch the datas in USEEFFECT and use everything directly in our component
// And Everyting is just like the old REACT.JS 