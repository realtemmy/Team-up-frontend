import { useState } from "react";
import { Copy, CornerDownLeft, Menu, Mic, Paperclip, RefreshCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
} from "@/components/ui/chat/chat-bubble";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import ChatMessage from "@/components/conversation/chat-message/ChatMessage";

import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatInput } from "@/components/ui/chat/chat-input";

import ChatSidebar from "@/features/chat/chat-sidebar/ChatSidebar";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const onUserSelect = (user) => {
    setSelectedUser(user);
  };

  // when its less than tablet and showDM is true, display only the dm, else display the chatlist
  const messages = [
    {
      variant: "sent",
      text: "Hello, how has your day been? I hope you are doing well.",
      fallback: "US",
      sender: {
        name: "Bonnie Green",
        profilePicture: "/docs/images/people/profile-picture-3.jpg",
      },
      timestamp: "11:46",
      images: [
        "/docs/images/blog/image-1.jpg",
        "/docs/images/blog/image-2.jpg",
        "/docs/images/blog/image-3.jpg",
        "/docs/images/blog/image-4.jpg",
        "/docs/images/blog/image-5.jpg",
      ],
      type: "text, images", // Can be 'text', 'images', etc.
      status: "Delivered",
    },
    {
      variant: "received",
      fallback: "RC",
      text: "Hi, I am doing well, thank you for asking. How can I help you today?",
      sender: {
        name: "Bonnie Green",
        profilePicture: "/docs/images/people/profile-picture-3.jpg",
      },
      timestamp: "11:46",
      images: [
        "/docs/images/blog/image-1.jpg",
        "/docs/images/blog/image-2.jpg",
        "/docs/images/blog/image-3.jpg",
        "/docs/images/blog/image-4.jpg",
        "/docs/images/blog/image-5.jpg",
      ],
      type: "text,images", // Can be 'text', 'images', etc.
      status: "Delivered",
    },
    {
      variant: "received",
      fallback: "RC",

      isLoading: true,
    },
  ];

  const users = [
    { id: 1, name: "Alice", avatar: "https://via.placeholder.com/40" },
    { id: 2, name: "Bob", avatar: "https://via.placeholder.com/40" },
    { id: 3, name: "Charlie", avatar: "https://via.placeholder.com/40" },
  ];


    const toggleSidebar = () => {
      setShowSidebar((prev) => !prev);
    };
  const actionIcons = [
    { icon: Copy, type: "Copy" },
    { icon: RefreshCcw, type: "Regenerate" },
  ];

  return (
    <div >
      <button className="sm:hidden p-2 bg-gray-200" onClick={toggleSidebar}>
        <Menu />
      </button>
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="fl h-full relative">
            <ChatMessageList>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${
                    message.variant === "sent" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <ChatBubbleAvatar fallback={message.fallback} />
                  <ChatBubble variant={message.variant}>
                    {message.isLoading ? (
                      <ChatBubbleMessage isLoading />
                    ) : (
                      // <ChatBubbleMessage
                      //   variant={message.variant}
                      // className={`my-2 rounded-lg ${
                      //   message.variant === "sent"
                      //     ? "rounded-br-none"
                      //     : "rounded-bl-none"
                      // }`}
                      // >
                      //   {message.text}
                      // </ChatBubbleMessage>
                      <ChatMessage
                        className={`my-2 rounded-lg ${
                          message.variant === "sent"
                            ? "rounded-br-none"
                            : "rounded-bl-none"
                        }`}
                        message={message}
                      />
                    )}
                  </ChatBubble>
                </div>
              ))}
            </ChatMessageList>
            <form
              className="w-full absolute bottom-2 rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
              onSubmit={handleSubmit}
            >
              <ChatInput
                placeholder="Type your message here..."
                className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
              />
              <div className="flex items-center p-3 pt-0">
                <Button variant="ghost" size="icon">
                  <Paperclip className="size-4" />
                  <span className="sr-only">Attach file</span>
                </Button>

                <Button variant="ghost" size="icon">
                  <Mic className="size-4" />
                  <span className="sr-only">Use Microphone</span>
                </Button>

                <Button size="sm" className="ml-auto gap-1.5">
                  Send Message
                  <CornerDownLeft className="size-3.5" />
                </Button>
              </div>
            </form>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Chat;
