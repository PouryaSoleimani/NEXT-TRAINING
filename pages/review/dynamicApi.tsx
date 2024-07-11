//^ DYNAMIC PAGE
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'

interface Props { allUsers: [{ id: number, username: string }] }
type SingleUserType = { id: number, username: string }


const DynamicApi: NextPage<Props> = ({ allUsers }) => {
    return (
        <section id='FULL_PAGE_SECTION' className='w-screen h-screen pt-16 bg-zinc-300 flex items-center justify-center'>
            <div className='w-fit mx-auto p-4 rounded-xl flex flex-wrap items-center justify-center gap-2 bg-transparent'>
                {allUsers.map((user: SingleUserType) => (
                    <Link href={`/review/${user.id}`}>
                        <div key={user.id} className="card w-[17.2rem] mx-auto mt-10  hover:scale-110 duration-300 cursor-pointer">
                            <div className="card-overlay"></div>
                            <div className="card-inner text-zinc-900">{user.id}<br />{user.username.toUpperCase()}<br /></div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}

//^ GET STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
    const request = axios.get('http://localhost:3000/api/users')
    const allUsers = (await request).data.usersArray

    return {
        props: { allUsers },
    }
}

export default DynamicApi