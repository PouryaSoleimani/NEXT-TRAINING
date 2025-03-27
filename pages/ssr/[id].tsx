//^ DYNAMIC SSR PAGE _________________________________________________________________________________________________________________________________________
import { url } from 'inspector'
import { NextPage, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

interface Props { data: { id: number, name: string, email: string, phone: string }, name: string, age: number }

const SingleUser: NextPage<Props> = ({ data }) => {

  const router = useRouter()

  function backHandler() { router.back() }

  return (
    <section className='w-screen h-screen flex items-center justify-center bg-opacity-30 ' style={{ backgroundImage: `url("/NEW___PICS/CARTOON____BG.jpg")` }}>
      <div className='flex flex-col items-center bg-white/10 backdrop-blur-sm backdrop-brightness-50 z-50  py-8 px-6 w-fit rounded-xl mx-auto border-2 border-white shadow-[8px_8px_15px_rgba(0,0,0,0.5),-8px_-8px_15px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-500 cursor-pointer'>
        <p className='text-3xl font-bold text-white mb-4'>{data.id}</p>
        <p className='text-2xl font-semibold text-white mb-2'>{data.name}</p>
        <p className='text-lg text-blue-100 mb-2 bg-blue-950 p-2 rounded-md w-full'>{data.email}</p>
        <p className='text-lg text-white mb-4 bg-red-950 p-2 text-center font-semibold rounded-md w-full'>{data.phone}</p>
        <button className='bg-green-700 hover:bg-green-600 text-white py-2 px-20 text-lg font-medium rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.5),-4px_-4px_10px_rgba(255,255,255,0.1)] transition-colors duration-300' onClick={backHandler} >  BACK </button>
      </div>
    </section>
  )
}

//^ GET SERVERSIDE PROPS
export const getServerSideProps: GetServerSideProps = async (context) => {

  console.log(context.req, context.res)   // HERE WE CAN ACCESS REQEUST AND RESPONSE DATAS BY USING {CONTEXT} , INCLUDING COOKIES AND ...
  console.log(context.query)   // AND ALSO WE CAN HAVE {QUERY} FROM THE {CTX} , WHICH GIVES US THE PATH NAME OF OUR MAIN ROUTE --> {id : '2'}
  // TO ADD A QUERY , WE MUST USE ? IN THE PATH NAME IN OUR BROWSER

  const userID = context.params?.id
  const req = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`) // FETCHING DATA RELATED TO QUERY.PARAMS AND USER ID
  const data = await req.json()

  // REDIRECTING THE USER TO THE {404 PAGE} IF THERE IS NO DATA FOR THAT ROUTE
  if (!Object.keys(data).length) {
    return {
      notFound: true,
      redirect: { destination: '/ssg/product-notfound' }      // CUSTOM REDIRECTING
    }
  };


  return { props: { data } }

}

export default SingleUser