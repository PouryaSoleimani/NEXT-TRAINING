//^ DYNAMIC PAGE SINGLE
import axios from 'axios'
import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

interface Props { Mainuser: { id: number, username: string } }

// COMPONENT
const DynamicApiSingle: NextPage<Props> = ({ Mainuser }) => {
    return (
        <section className='flex items-center justify-center h-screen w-screen'>
            <div className='flex items-center justify-center'>
                <h1>{Mainuser.username}</h1>
            </div>
        </section>
    )
}



//^ GET STATIC PATHS
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: false,
    }
}

//^ GET STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
    const ID: number = Number(ctx.params?.id)
    const request = axios.get(`http://localhost:api/review/${ID}`)
    const Mainuser = (await request).data.mainUser

    return {
        props: { Mainuser },
    }
}
export default DynamicApiSingle