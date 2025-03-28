import { NextPage, GetServerSideProps } from 'next'

interface Props { data: [{ id: number; name: string; username: string; email: string }] }
type SingleUserType = { id: number; name: string; username: string; email: string }



// COMPONENT ===================================================================================================================================
const Ssr4: NextPage<Props> = ({ data }) => {
    return (
        <section className='w-screen h-screen flex items-center justify-center flex-col gap-y-10 bg-gradient-to-br from-zinc-900 via-black to-zinc-800'>
            <h1 className='w-full p-2 rounded-md text-center bg-zinc-800 flex items-center justify-center text-pink-700 font-bold text-4xl'>SSR RENDERING PAGE</h1>

            <div className='grid grid-cols-4 gap-6 p-5'>
                {data.map((user: SingleUserType) => (
                    <div key={user.id} className="p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl  duration-500 border-2 border-white/30 hover:-translate-y-2 cursor-pointer ">
                        <h2 className="text-xl font-semibold text-white">{user.name}</h2>
                        <p className="text-gray-400">{user.username}</p>
                        <p className="text-gray-500">{user.email}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

// SERVER-SIDE PROPS ===========================================================================================================================
export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await request.json()

    return {
        props: { data: data }
    }
}

export default Ssr4