//? REVIEW PAGE =================================================================================================================
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'

interface Props { users: [{ id: number, firstname: string, lastname: string }] }
type SingleUserType = { id: number, firstname: string, lastname: string }

const ReviewPage: NextPage<Props> = ({ users }) => {
    return (

        <section id='FULL_PAGE_SECTION' className='w-screen h-screen pt-16 bg-zinc-300'>
            <div className='w-fit mx-auto p-4 rounded-xl flex space-x-2 bg-transparent'>
                {users.map((user: SingleUserType) => (
                    <div key={user.id} className="card w-[17.2rem] mx-auto mt-10  hover:scale-110 duration-300 cursor-pointer">
                        <div className="card-overlay"></div>
                        <div className="card-inner text-zinc-900">{user.id}<br />{user.firstname.toUpperCase()}<br />{user.lastname.toUpperCase()}</div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const request = axios.get('http://localhost:3000/api/review/request')
    const response = (await request).data
    const users = response.data

    return {
        props: { users },
    }
}

export default ReviewPage

