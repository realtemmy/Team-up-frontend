import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import defaultProfile from "./../../assets/default profile.jpg";

import useTimeAgo from '@/hooks/use-timeago';

const Comments = ({comments}) => {
  if(comments.length === 0){
    return <div className="p-4 space-y-2 text-center bg-gray-50 text-lg font-semibold">No comment yet!</div>;
  }
  return (
    <div className="p-4 space-y-2 bg-gray-50">
      {comments.map((comment) => (
        <div key={comment._id} className="flex items-start space-x-2">
          <Avatar >
            <AvatarImage src={comment.userId.photo || defaultProfile}  alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div className="bg-gray-100 p-2 rounded-lg">
              <h4 className="font-semibold text-sm">{comment.userId.name}</h4>
              <p className="text-sm">{comment.comment}</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">{useTimeAgo(comment.createdAt)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Comments
