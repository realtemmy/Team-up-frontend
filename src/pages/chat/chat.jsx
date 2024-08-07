import { useSelector } from "react-redux";
import ChatList from "../../components/conversation/chat-list/chatList";
import ChatDM from "../../components/conversation/chat-dm/ChatDM";
import UserChatProfile from "../../components/conversation/user-chat-profile/UserChatProfile";

const Chat = () => {
  const { showDM, showProfile } = useSelector((state) => state.chat);

  // when its less than tablet and showDM is true, display only the dm, else display the chatlist

  return (
    <div className="grid grid-cols-8 overflow-y-hidden">
      <div
        className={`${showDM && "hidden"} sm:block col-span-8 sm:col-span-4 md:col-span-3 lg:col-span-2`}
      >
        <ChatList />
      </div>
      <div
        className={`${!showDM && "hidden"} col-span-8 sm:block ${
          showProfile
            ? "sm:block sm:col-span-4 md:col-span-5 lg:col-span-4"
            : "sm:col-span-4 md:col-span-5 lg:col-span-6"
        }`}
      >
        <ChatDM />
      </div>
      <div
        className={
          showProfile ? "col-span-8 lg:col-span-2 hidden lg:block" : "hidden"
        }
      >
        <UserChatProfile />
      </div>
    </div>
  );
};

export default Chat;
