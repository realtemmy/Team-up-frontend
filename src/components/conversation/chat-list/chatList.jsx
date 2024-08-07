import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

import UserChat from "../user-chat/UserChat";

const ChatList = () => {
  const [activeMessage, setActiveMessage] = useState("direct");
  return (
    <div className="border-r h-screen bg-gray-100">
      <div className="flex items-center">
        <div className="font-bold text-2xl text-slate-800 px-4 py-3">Chats</div>
        <div>
          <Badge variant="secondary">0</Badge>
        </div>
        <div>
          <Plus
            color="white"
            className="bg-blue-900 rounded-full cursor-pointer"
          />
        </div>
      </div>
      <ul className="flex items-center gap-4 px-4">
        {["direct", "groups"].map((el, index) => (
          <li
            className={`p-2 uppercase font-semibold text-slate-400 text-sm cursor-pointer hover:text-slate-700 transition-all ${
              activeMessage === el && "text-slate-700"
            }`}
            key={index}
            onClick={() => setActiveMessage(el)}
          >
            {el}
            <sup className="bg-gray-500 px-1 rounded-full text-white">
              {index + 1}
            </sup>
          </li>
        ))}
      </ul>

      <ScrollArea className="h-screen w-full border-t">
        <form className="w-full px-4">
          <label className="block">
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 outline-none bg-gray-100"
              placeholder="Search messages"
            />
          </label>
        </form>
        <div className="p-4">
          <UserChat />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ChatList;
