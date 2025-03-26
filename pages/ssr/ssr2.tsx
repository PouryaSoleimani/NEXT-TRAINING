import { Card } from 'antd'
import { NextPage, GetServerSideProps } from 'next'

interface Props { data: [{ id: number, name: string, username: string, email: string }] }
type SingleUserType = { id: number, name: string, username: string, email: string }



const SSR2: NextPage<Props> = ({ data }) => {
    return (
        <div className='flex w-screen h-1/2 mt-auto p-10 gap-5 flex-wrap items-center justify-center'>
            {data.map((user: SingleUserType) => (
                <Card type='inner' key={user.id} className='w-72 h-48 flex flex-col items-center justify-center font-extralight' bordered>
                    <h2>{user.name}</h2>
                    <p>{user.username}</p>
                    <h4>{user.email.slice(0, 15)}</h4>
                </Card>
            ))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const req = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await req.json()

    return {
        props: { data }
    }
}

export default SSR2