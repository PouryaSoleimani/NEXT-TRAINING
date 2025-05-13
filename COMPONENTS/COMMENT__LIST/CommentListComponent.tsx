import React from 'react'
interface CommentsProps { commentsData: { id: number; name: string }[]; }
type SingleCoinType = { id: number, name: string }

const CommentListComponent: React.FC<CommentsProps> = ({ commentsData }) => {
    return (
        <div className='w-screen h-screen grid grid-cols-4 grid-rows-3 place-items-center'>
            {commentsData.map((item: SingleCoinType) => (
                <div key={item.id} className='size-32 flex items-center justify-center text-xl tracking-tighter font-bold bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-950 text-white'>
                    {item.name.slice(0, 10)}
                </div>
            ))}
        </div>
    )
}

export default CommentListComponent