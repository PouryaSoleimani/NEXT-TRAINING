import { NextPage, GetStaticProps } from 'next'

interface Props { data: [{ id: number; name: string; username: string; email: string }] }
type SingleUserType = { id: number; name: string; username: string; email: string }


// COMPONENT ===================================================================================================================================
const Ssg2: NextPage<Props> = ({ data }) => {
    return (
        <div>
            <h6 className='w-full p-2 rounded-md text-center bg-zinc-900 flex items-center justify-center text-pink-800 font-bold text-4xl'>SSG RENDERING PAGE</h6>
            <div className='grid grid-cols-4 gap-6 p-5'>
                {data.map((user: SingleUserType) => (
                    <div key={user.id} className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl  duration-500 border-2 border-white/30 hover:-translate-y-2 cursor-pointer ">
                        <h2 className="text-xl font-semibold text-white">{user.name}</h2>
                        <p className="text-gray-400">{user.username}</p>
                        <p className="text-gray-500">{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await request.json()

    return {
        props: { data: data },
    }
}

export default Ssg2