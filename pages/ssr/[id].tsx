//* DYNAMIC SSR PAGE _________________________________________________________________________________________________________________________________________
import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

interface Props { data: { id: number, name: string, email: string, phone: string }, name: string, age: number }

const SingleUser: NextPage<Props> = ({ data }) => {

  const router = useRouter()

  function backHandler() { router.back() }

  return (
    <div className='h-fit px-4 bg-zinc-900 py-6 w-fit rounded-xl mx-auto mt-44 border-2 borde-white hover:scale-110 duration-700 cursor-pointer'>
      <h1 className=' font-extrabold text-4xl  p-4'>{data.id}</h1>
      <h1 className='font-extrabold text-4xl p-4'>{data.name}</h1>
      <h1 className='font-extrabold text-4xl p-4 text-blue-700'>{data.email}</h1>
      <h1 className='font-extrabold text-4xl p-4 text-red-700'>{data.phone}</h1>
      <button onClick={backHandler} className='bg-green-600 text-black p-2 mt-4 text-3xl font-bold w-full'>BACK</button>
    </div>
  )
}

//^ GET SERVERSIDE PROPS
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  console.log(ctx.req, ctx.res)
  // HERE WE CAN ACCESS REQEUST AND RESPONSE DATAS BY USING {CTX} , INCLUDING COOKIES AND ...

  console.log(ctx.query)
  // AND ALSO WE CAN HAVE {QUERY} FROM THE {CTX} , WHICH GIVES US THE PATH NAME OF OUR MAIN ROUTE --> {id : '2'}
  // TO ADD A QUERY , WE MUST USE ? IN THE PATH NAME IN OUR BROWSER

  const userID = ctx.params?.id
  const req = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
  const data = await req.json()

  // REDIRECTING THE USER TO THE {404 PAGE} IF THERE IS NO DATA FOR THAT ROUTE
  if (!Object.keys(data).length) {
    return {
      notFound: true,
      // CUSTOM REDIRECTING
      redirect: { destination: '/' }
    }
  };


  return { props: { data } }

}

export default SingleUser