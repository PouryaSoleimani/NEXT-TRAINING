import { NextPage, GetServerSideProps } from 'next'

interface Props { data: [{ id: number, name: string, username: string, email: string }] }
type SingleUserType = { id: number, name: string, username: string, email: string }



// COMPONENT
const SSR3: NextPage<Props> = ({ data }) => {
    return (
        <div className="flex">
            {data.map((item: SingleUserType) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <h3>{item.username}</h3>
                    <h4>{item.email}</h4>
                </div>
            ))}
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await (request.json())


    return {
        props: { data }
    }
}

export default SSR3