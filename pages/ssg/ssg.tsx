import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'

interface Props { response: [{ id: number, title: string, price: number }] }
type SingleItemType = { id: number, title: string, price: number }

const Ssg: NextPage<Props> = ({ response }) => {
    return (
        <>
            <h1 className='text-4xl font-extrabold text-center py-5 bg-yellow-400'>SSG PAGE</h1>


            <div className='text-xl space-y-2 font-semibold'>
                {response.map((item: SingleItemType) =>
                    <p key={item.id}>{item.id} - {item.title.slice(0, 12)} : <span className='text-red-500'>${item.price}</span>
                    </p>)
                }
            </div>


        </>
    )
}


// ^ STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
    const request = axios.get('https://fakestoreapi.com/products')
    const response = (await request).data


    return {
        props: { response },
    }
}

export default Ssg




// ? SSG TUTORIAL :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// GET STATIC PROPS :
// 1 - ONLY RUNS IN SERVER-SIDE
// 2 - VERY SECURE
// 3 - CAN RUN NODE.JS CODES IN IT
// 4 - CAN ONLY BE USERD IN {pages} FOLDER AND NOT IN COMPONENTS
// 5 - MUST ALWAYS RETURN AN OBJECT{} WITH A props PROPERTY
