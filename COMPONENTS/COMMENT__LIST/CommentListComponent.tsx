import React from 'react'
interface CommentsProps { commentsData: { id: number; body: string }[]; }
type SingleCoinType = { id: number, body: string }

const CommentListComponent: React.FC<CommentsProps> = ({ commentsData }) => {
    return (
        <div className='w-screen grid grid-cols-3 grid-rows-2 gap-5 pt-16 px-20 place-items-center'>
            {commentsData.map((item: SingleCoinType) => (
                <div key={item.id} className='w-[20rem] text-center px-5 h-[20rem] gap-6 flex flex-col rounded-xl items-center justify-center text-2xl tracking-tighter font-bold bg-orange-400 text-black'>
                    {item.body.slice(0, 50)}
                </div>
            ))}
        </div>
    )
}

export default CommentListComponent