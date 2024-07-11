//? REVIEW PAGE =================================================================================================================
import axios from 'axios'
import { NextPage, GetStaticProps } from 'next'

interface Props { users: [{ id: number, firstname: string, lastname: string }] }
type SingleUserType = { id: number, firstname: string, lastname: string }

const ReviewPage: NextPage<Props> = ({ users }) => {
    return (
        <div className='bg-zinc-800 w-fit mx-auto mt-10 p-4 rounded-xl'>
            {users?.map((user: SingleUserType) => (
                <div key={user.id} className='text-2xl font-bold'>
                    <h1 className='my-4'>{user.id} - {user.firstname.toLocaleUpperCase()} {user.lastname.toLocaleUpperCase()}</h1>
                </div>
            ))}
        </div>
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