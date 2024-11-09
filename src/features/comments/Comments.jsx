import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react'

const Comments = ({comments}) => {
  return (
    <div className="p-4 space-y-2 bg-gray-50">
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-start space-x-2">
          {/* <Avatar src={comment.user.avatar} className="h-8 w-8" /> */}
          <Avatar>
            <AvatarImage src={comment.user.avatar} alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <h4 className="font-semibold text-sm">{comment.user.name}</h4>
              <p className="text-sm">{comment.content}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">{comment.createdAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments
