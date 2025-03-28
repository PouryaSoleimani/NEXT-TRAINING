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
            <div className='flex items-center justify-center bg-zinc-900 px-10 py-4 rounded-3xl border-8 border-zinc-200'>
                <h1 className='text-9xl uppercase font-extrabold'>{Mainuser.id} - {Mainuser.name}</h1>
            </div>
        </section >
    )
}


//^ GET STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {

    const request = axios.get('http://localhost:4000/users');
    const response = (await request).data
    const paths = response.map((item: { id: number }) => { return { params: { id: String(item.id) } } })

    return {
        paths: paths,
        fallback: false,
    }
}

//^ GET STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
    const ID = ctx.params?.id
    const request = axios.get(`http://localhost:4000/users/${ID}`)
    const Mainuser = (await request).data

    return { props: { Mainuser }, }
}
export default DynamicApiSingle