import { Card } from 'antd'
import { NextPage, GetServerSideProps } from 'next'

interface Props { data: [{ id: number, name: string, username: string, email: string }] }
type SingleUserType = { id: number, name: string, username: string, email: string }



const Ss2: NextPage<Props> = ({ data }) => {
    return (
        <div>
            {data.map((user: SingleUserType) => (
                <Card type='inner' key={user.id}>
                    <h2>{user.name}</h2>
                    <h2>{user.username}</h2>
                    <h2>{user.email}</h2>
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

export default Ss2