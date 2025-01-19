import ChatDM from "@/components/conversation/chat-dm/ChatDM";
import ChatList from "@/components/conversation/chat-list/ChatList";

const Chat = () => {
  return (
    <div className="flex gap-2">
      <div className="hidden md:block">
         <ChatList />
      </div>
     
      <div className="w-full">
        <ChatDM />
      </div>
    </div>
  );
};

export default Chat;
