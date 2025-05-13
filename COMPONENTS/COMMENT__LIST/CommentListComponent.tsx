import React from 'react'
interface CommentsProps { commentsData: { id: number; title: string }[]; }
type SingleCoinType = { id: number, title: string }

const CommentListComponent: React.FC<CommentsProps> = ({ commentsData }) => {
    return (
        <div className='w-screen h-screen grid grid-cols-4 grid-rows-3 place-items-center'>
            {commentsData.map((item: SingleCoinType) => (
                <div key={item.id} className='size-32 rounded-lg flex items-center justify-center text-xl tracking-tighter font-bold bg-gradient-to-br from-zinc-700 via-gray-800 to-zinc-900 text-white'>
                    {item.title.slice(0, 10)}
                </div>
            ))}
        </div>
    )
}

export default CommentListComponent