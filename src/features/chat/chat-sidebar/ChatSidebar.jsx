import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for toggle
import { cn } from "@/lib/utils";

const ChatSidebar = ({ users, onUserSelect }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "flex flex-col transition-all duration-300 border h-screen w-full",
        // isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-100">
        <h2 className={cn("text-lg font-semibold", isCollapsed && "hidden")}>
          Chats
        </h2>
        <button
          onClick={toggleSidebar}
          className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* User List */}
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <button
            key={user.id}
            onClick={() => onUserSelect(user)}
            className="flex items-center w-full px-4 py-2 space-x-2 text-left hover:bg-gray-200"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            {!isCollapsed && <span className="truncate">{user.name}</span>}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatSidebar;
