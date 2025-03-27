import { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'

interface Props { data: [{ id: number, name: string, username: string, email: string }] }
type SingleUserType = { id: number, name: string, username: string, email: string }



// COMPONENT ===============================================================================================================================================
const SSR3: NextPage<Props> = ({ data }) => {

    return (
        <div className="flex flex-wrap gap-10 items-center justify-center mt-16">
            {data.slice(0, 9).map((item: SingleUserType) => (
                <Link href={`/ssr/${item.id}`} key={item.id} className='w-[20rem] h-[10rem] bg-white rounded-xl text-sm p-4 hover:-translate-y-3 duration-500 cursor-pointer'>
                    <p>{item.name}</p>
                    <p>{item.username}</p>
                    <p>{item.email}</p>
                </Link>
            ))}
        </div>
    )
}

// GET SERVER SIDE PROPS =====================================================================================================================================
export const getServerSideProps: GetServerSideProps = async (context) => {

    const { params, req, res } = context

    const request = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await (request.json())

    console.log("PARAMS ====> ", params)
    // Accessing the Cookie via req variable
    console.log("COOKIES ====>", req.cookies)
    // Accessing the res variable
    console.log("RESPONSE ===>", res)

    return {
        props: { data }
    }
}

export default SSR3