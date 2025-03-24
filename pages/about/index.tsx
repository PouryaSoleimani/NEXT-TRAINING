import { NextPage, GetStaticProps } from 'next'
interface Props { posts: SinglePostType[]; }
type SinglePostType = { id: number, title: string, body: string }


//^ COMPONENT  
const SSG: NextPage<Props> = ({ posts }) => {
   return (
      <div className='font-sans bg-zinc-950 min-h-screen  flex items-center justify-around w-[90%] mx-auto gap-4 flex-wrap p-10'>
         {posts.map((post: SinglePostType) => (
            <div key={post.id} className='border-8 border-orange-400  p-4 rounded-lg text-white font-black w-64 h-32 flex items-center justify-center duration-500 hover:scale-110'>{post.title.slice(0, 20)}</div>
         ))}
      </div>
   )
}


//^ GET STATIC PROPS
export const getStaticProps: GetStaticProps = async (ctx) => {
   const request = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await request.json()
   return {
      props: { posts: data },
   }
}



export default SSG