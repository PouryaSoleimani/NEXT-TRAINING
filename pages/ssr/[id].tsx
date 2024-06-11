//^ DYNAMIC SSR PAGE _________________________________________________________________________________________________________________________________________
import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

interface Props { data: { id: number, name: string, email: string, phone: string }, name: string, age: number }

const SingleUser: NextPage<Props> = ({ data, name, age }) => {

  const router = useRouter()

  function backHandler() { router.back() }

  return (
    <div className='h-fit pl-4'>
      <h1 className=' font-extrabold text-4xl  p-4'>{data.id}</h1>
      <h1 className='font-extrabold text-4xl p-4'>{data.name}</h1>
      <h1 className='font-extrabold text-4xl p-4 text-blue-700'>{data.email}</h1>
      <h1 className='font-extrabold text-4xl p-4 text-red-700'>{data.phone}</h1>
      <h1 className='font-extrabold text-xl p-4 text-yellow-400'>{name} - {age}</h1>
      <button onClick={backHandler} className='bg-emerald-400 text-black p-2 ml-4 mt-4 text-xl font-bold outline-4 outline outline-zinc-600'>BACK</button>
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
  const name: string = 'ALRIEZA'
  const age: number = 10


  // REDIRECTING THE USER TO THE {404 PAGE} IF THERE IS NO DATA FOR THAT ROUTE
  if (!Object.keys(data).length) {
    return {
      notFound: true,
      // redirect: { destination: '/' } --> CUSTOM REDIRECTING
    }
  };


  return { props: { data, name, age } }

}

export default SingleUser