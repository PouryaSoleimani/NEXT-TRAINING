import { NextPage, GetStaticProps } from 'next'

interface Props {
   posts: any[];
}

const Index: NextPage<Props> = ({ posts }) => {
   return (
      <div className='flex flex-wrap gap-4 mx-auto items-center justify-around p-10'>
         {posts.map(post => (
            <div key={post.id} className='border-2 p-4 my-4 w-64 h-32 flex items-center justify-center flex-col rounded-xl bg-zinc-900'>
               <h2 className='text-white'>{post.title.slice(0, 10)}</h2>
               <p className='text-zinc-500'>{post.body.slice(0, 40)}</p>
            </div>
         ))}
      </div>
   )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
   const request = await fetch('https://jsonplaceholder.typicode.com/posts')
   const data = await request.json()

   return {
      props: { posts: data },
   }
}

export default Index