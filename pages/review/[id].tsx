//^ DYNAMIC PAGE SINGLE
import axios from 'axios'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
interface Props { Mainuser: { id: number, username: string } }

// COMPONENT
const DynamicApiSingle: NextPage<Props> = ({ Mainuser }) => {
    const router = useRouter()
    function backHandler() { router.back() }

    return (
        <section className='flex items-center justify-center h-screen w-screen' >
            {Mainuser ? (

                <div className='flex items-center justify-center'>
                    <h1 className='text-9xl uppercase font-extrabold'>{Mainuser.id} - {Mainuser.username}</h1>
                </div>

            ) : (
                <div>
                    <h1 className='text-9xl uppercase font-extrabold text-orange-500'>User Not Found</h1>
                    <button onClick={backHandler} className='px-6 py-2 bg-sky-600 rounded-xl'>← BACK </button>
                </div>
            )}
        </section >
    )
}


//^ GET STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {

    const request = axios.get('http://localhost:3000/api/users');
    const response = (await request).data.usersArray
    const paths = response.map((item: { id: number }) => { return { params: { id: String(item.id) } } })

    return {
        paths: paths,
        fallback: false,
    }
}

//^ GET STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
    const ID = ctx.params?.id
    const request = axios.get(`http://localhost:3000/api/review/${ID}`)
    const Mainuser = (await request).data.mainUser
    return { props: { Mainuser }, }
}
export default DynamicApiSingle