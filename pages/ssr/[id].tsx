//^ DYNAMIC SSR PAGE _________________________________________________________________________________________________________________________________________
import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

interface Props { data: { id: number, name: string, email: string, phone: string }, name: string, age: number }

const SingleUser: NextPage<Props> = ({ data }) => {

  const router = useRouter()

  function backHandler() { router.back() }

  return (
    <div className='h-fit px-4 bg-zinc-900 py-6 mt-32 w-fit rounded-xl mx-auto border-2 borde-white hover:scale-110 duration-700 cursor-pointer'>
      <p className=' font-extrabold text-2xl  text-white text-center'>{data.id}</p>
      <p className='font-extrabold text-2xl text-center text-white'>{data.name}</p>
      <p className='font-extrabold text-xl text-blue-900'>{data.email}</p>
      <p className='font-extrabold text-xl text-red-900'>{data.phone}</p>
      <button onClick={backHandler} className='bg-green-600 text-black p-2 text-3xl font-bold w-full rounded-xl'>BACK</button>
    </div>
  )
}

//^ GET SERVERSIDE PROPS
export const getServerSideProps: GetServerSideProps = async (context) => {

  console.log(context.req, context.res)   // HERE WE CAN ACCESS REQEUST AND RESPONSE DATAS BY USING {CTX} , INCLUDING COOKIES AND ...
  console.log(context.query)   // AND ALSO WE CAN HAVE {QUERY} FROM THE {CTX} , WHICH GIVES US THE PATH NAME OF OUR MAIN ROUTE --> {id : '2'}
  // TO ADD A QUERY , WE MUST USE ? IN THE PATH NAME IN OUR BROWSER

  const userID = context.params?.id
  const req = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
  const data = await req.json()

  // REDIRECTING THE USER TO THE {404 PAGE} IF THERE IS NO DATA FOR THAT ROUTE
  if (!Object.keys(data).length) {
    return {
      notFound: true,
      // CUSTOM REDIRECTING
      redirect: { destination: '/ssg/product-notfound' }
    }
  };


  return { props: { data } }

}

export default SingleUser