//^ MENU MAIN PAGE
import { NextPage, GetStaticProps } from 'next'
import db from '@/data/db.json'
import { useState } from 'react'
import Link from 'next/link'


interface Props { }

const Index: NextPage<Props> = ({ }) => {

  const [PRODUCTS, setPRODUCTS] = useState([...db.products])


  return (
    <div>
      <h1 className='bg-amber-700 p-4 font-bold text-3xl text-center'>MENU PAGE</h1>
      <div className='flex flex-col px-4 space-y-4 text-2xl py-4 font-bold tracking-tighter '>
        {PRODUCTS.map(item => (
          <Link href={`/menu/${item.id}`} >
            <p> - {item.title}</p>
          </Link>
        ))}
      </div>
    </div >


  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {},
  }
}

export default Index