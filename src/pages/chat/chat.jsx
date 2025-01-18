import ChatDM from "@/components/conversation/chat-dm/ChatDM";
import ChatList from "@/components/conversation/chat-list/ChatList";

const Chat = () => {
  return (
    <div className="flex gap-2">
      <ChatList />
      <div className="w-full">
        <ChatDM />
      </div>
    </div>
  );
};

export default Chat;
