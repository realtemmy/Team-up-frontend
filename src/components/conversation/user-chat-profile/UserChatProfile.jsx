import { useDispatch } from "react-redux";
import { toggleProfile } from "@/redux/chat-redux/chatSlice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";

const UserChatProfile = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(toggleProfile(false));
  }
  return (
    <ScrollArea className="h-screen w-full relative">
      <div className="absolute right-1 top-1">
        <X className="cursor-pointer" onClick={handleClose} />
      </div>
      <div className="flex flex-col items-center px-1 py-2">
        <Avatar className="w-28 h-28">
          <AvatarImage src="https://github.com/shadcn.png" alt="user photo" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Guest</p>
        <p>Bio: Lorem ipsum dolor sit amet.</p>
        <div>Groups in common</div>
      </div>
    </ScrollArea>
  );
};

export default UserChatProfile;
