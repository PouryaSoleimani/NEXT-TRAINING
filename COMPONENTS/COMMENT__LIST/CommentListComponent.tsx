import React from 'react'
interface CommentsProps { commentsData: { id: number; name: string }[]; }
type SingleCoinType = { id: number, name: string }
import { Card } from '@/COMPONENTS/ui/card'

const CommentListComponent: React.FC<CommentsProps> = ({ commentsData }) => {
    return (
        <div className='w-screen h-screen flex flex-wrap gap-10 p-20 items-center justify-around'>
            {commentsData.map((item: SingleCoinType) => (
                <Card key={item.id} className='size-32 flex items-center justify-center text-xl tracking-tighter font-bold bg-gradient-to-br from-zinc-900 via-gray-900 to-zinc-950 text-white'>{item.name.slice(0, 10)}</Card>
            ))}
        </div>
    )
}

export default CommentListComponent