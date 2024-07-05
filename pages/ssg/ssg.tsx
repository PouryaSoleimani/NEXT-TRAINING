//^  SSG PAGE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

interface Props { response: [ { id: number, title: string, price: number } ] }
type SingleItemType = { id: number, title: string, price: number }

//COMPONENT
const Ssg: NextPage<Props> = ({ response }) => {
  return (
    <div className='text-2xl flex flex-col space-y-2 font-semibold'>

      {response.map((item: SingleItemType) => (
        <Link href={`/ssg/${item.id}`} key={item.id}>
          <h2>{item.id} - {item.title} : <span className='text-red-600'>"${item.price}"</span></h2>
        </Link>
      ))}

    </div>
  )
}

//^ GET STATIC PROPS :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
export const getStaticProps: GetStaticProps = async (ctx) => {
  const request = axios.get('https://fakestoreapi.com/products')
  const response = (await request).data

  return {
    props: { response },
    revalidate: 43200
  }

}

export default Ssg

// ^ SSG TUTORIAL :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// GET STATIC PROPS :
// 1 - ONLY RUNS IN SERVER-SIDE
// 2 - VERY SECURE
// 3 - CAN RUN NODE.JS CODES IN IT
// 4 - CAN ONLY BE USERD IN {pages} FOLDER AND NOT IN COMPONENTS
// 5 - MUST ALWAYS RETURN AN OBJECT{} WITH A props PROPERTY
