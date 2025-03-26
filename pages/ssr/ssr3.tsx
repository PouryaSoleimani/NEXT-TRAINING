import { NextPage, GetServerSideProps } from 'next'

interface Props { data: [{ id: number, name: string, username: string, email: string }] }
type SingleUserType = { id: number, name: string, username: string, email: string }



// COMPONENT
const SSR3: NextPage<Props> = ({ data }) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center mt-10">
            {data.slice(0, 9).map((item: SingleUserType) => (
                <div key={item.id} className='w-[20rem] h-[10rem] bg-white rounded-xl text-sm p-4'>
                    <p>{item.name}</p>
                    <p>{item.username}</p>
                    <p>{item.email}</p>
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