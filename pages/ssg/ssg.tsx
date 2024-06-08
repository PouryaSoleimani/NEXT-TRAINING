import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import { useEffect } from 'react'

interface Props { name: string, age: number, job: string, res: [] }

//^ COMPONENT
const Ssg: NextPage<Props> = ({ name, age, job, res }) => {
    // TYPES
    type resType = { [props: string]: string }

    //FUNCTIONS
    function logger(name: string, age: number, job: string) { console.log(name, age, job) }

    useEffect(() => { logger('pourya', 30, 'developer') }, [])

    // RETURN =============================================================================================================================================================
    return (
        <>
            <div>
                <h1 className='bg-zinc-800  p-4 box-border font-bold text-3xl text-center text-yellow-400 underline decoration-black decoration-8  border-4'>{name} - {age} - {job}</h1>
            </div>

            {/* RESPONSE */}
            <div>
                <ul className='flex flex-col space-y-4 text-2xl font-bold px-4 py-2 text-zinc-300'>
                    {res.map((item: resType) => (<li key={item.id} className='border-b border-zinc-700'>{item.title.slice(0, 15).toLocaleUpperCase()}</li>))}
                </ul>
            </div>
        </>
    )
}


// GET STATIC PROPS
export const getStaticProps: GetStaticProps = async () => {

    let name: string = 'Pourya'
    let age: number = 30
    let job: string = "Web Developer"

    const req = axios.get('https://fakestoreapi.com/products')
    const res = (await req).data


    return {
        props: { name, age, job, res },
    }
}
// GET STATIC PROPS :
// 1 - ONLY RUNS IN SERVER-SIDE
// 2 - VERY SECURE
// 3 - CAN RUN NODE.JS CODES IN IT
// 4 - CAN ONLY BE USERD IN {pages} FOLDER AND NOT IN COMPONENTS
// 5 - MUST ALWAYS RETURN AN OBJECT{} WITH A props PROPERTY
// 6 - 




export default Ssg