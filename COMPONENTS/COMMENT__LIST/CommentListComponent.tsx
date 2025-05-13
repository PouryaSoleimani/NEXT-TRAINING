import Image from 'next/image';
import React from 'react'
interface CommentsProps { commentsData: { id: number; title: string, image: string }[]; }
type SingleCoinType = { id: number, title: string, image: string }

const CommentListComponent: React.FC<CommentsProps> = ({ commentsData }) => {
    return (
        <div className='w-screen grid grid-cols-4 grid-rows-3 gap-5 pt-16 place-items-center'>
            {commentsData.map((item: SingleCoinType) => (
                <div key={item.id} className='w-[20rem] h-[20rem] flex items-center justify-center text-xl tracking-tighter font-bold bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-950 text-white'>
                    <Image src={item.image} width={200} height={200} alt='IMAGE'/>
                    {item.title.slice(0, 10)}
                </div>
            ))}
        </div>
    )
}

export default CommentListComponent