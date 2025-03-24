import { NextPage, GetStaticProps } from 'next'


//^ COMPONENT  
interface Props { posts: SinglePostType[]; }
type SinglePostType = { id: number, title: string, body: string }
const SSG: NextPage<Props> = ({ posts }) => {
   return (
      <div className='p-6 font-sans bg-zinc-950 min-h-screen  flex items-center justify-center gap-4 flex-wrap'>
         {posts.map((post: SinglePostType) => (
            <div key={post.id} className='border-2 p-4 rounded-lg text-white font-black'>{post.title}</div>
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