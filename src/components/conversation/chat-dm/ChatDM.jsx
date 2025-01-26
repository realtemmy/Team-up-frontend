import { useState } from "react";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import ChatMessage from "@/components/conversation/chat-message/ChatMessage";

import { ChatMessageList } from "@/components/ui/chat/chat-message-list";

import ChatHeader from "@/components/conversation/chat-header/ChatHeader";
import { Button } from "@/components/ui/button";

import useUser from "@/hooks/use-user";
import axiosService from "@/axios";

const ChatDM = () => {
  const conversationId = useSelector((state) => state.chat.conversationId);

  const { data: user } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Get chats when a user clicks on a chat
  const { data, isLoading, isError } = useQuery({
    queryKey: ["messages", conversationId],
    queryFn: async () => {
      const response = await axiosService.get(
        `/conversations/${conversationId}`
      );
      return response.data;
    },
    enabled: !!conversationId,
  });
  // console.log("User: ", user);

  // const messages = [
  //   {
  //     variant: "sent",
  //     text: "Hello, how has your day been? I hope you are doing well.",
  //     fallback: "US",
  //     sender: {
  //       name: "Bonnie Green",
  //       profilePicture: "/docs/images/people/profile-picture-3.jpg",
  //     },
  //     timestamp: "11:46",
  //     images: [
  //       "https://plus.unsplash.com/premium_photo-1736803528008-0f172fbca646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1736803528008-0f172fbca646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       "https://images.unsplash.com/photo-1736924862365-9038a7e1be81?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       "https://images.unsplash.com/photo-1736598734718-daa665cc511c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       "https://images.unsplash.com/photo-1737020622517-17a9dae61a11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       "https://plus.unsplash.com/premium_photo-1733306523150-77b7bc4e22db?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     ],
  //     status: "Read",
  //   },
  //   {
  //     variant: "received",
  //     fallback: "RC",
  //     text: "Hi, I am doing well, thank you for asking. How can I help you today?",
  //     sender: {
  //       name: "Bonnie Green",
  //       profilePicture: "/docs/images/people/profile-picture-3.jpg",
  //     },
  //     timestamp: "11:46",
  //     images: [
  //       // "https://plus.unsplash.com/premium_photo-1736803528008-0f172fbca646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1736803528008-0f172fbca646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       "https://images.unsplash.com/photo-1736924862365-9038a7e1be81?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       "https://images.unsplash.com/photo-1736598734718-daa665cc511c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       // "https://images.unsplash.com/photo-1737020622517-17a9dae61a11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //       // "https://plus.unsplash.com/premium_photo-1733306523150-77b7bc4e22db?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     ],
  //     status: "Delivered",
  //   },
  //   {
  //     variant: "sent",
  //     text: "Hello, how has your day been? I hope you are doing well.",
  //     fallback: "US",
  //     sender: {
  //       name: "Bonnie Green",
  //       profilePicture: "/docs/images/people/profile-picture-3.jpg",
  //     },
  //     timestamp: "11:46",
  //     images: [],
  //     status: "Sent",
  //   },
  //   {
  //     variant: "received",
  //     fallback: "RC",

  //     isLoading: true,
  //   },
  // ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <>
      <ChatHeader />
      <div>
        <ScrollArea className="h-[calc(70vh)] w-full my-1 ">
          <ChatMessageList className="p-0">
            {data.messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-2  ${
                  message.receiver === user._id
                    ? "flex-row"
                    : "flex-row-reverse"
                }`}
              >
                {/* <ChatBubbleAvatar
                  fallback={message.fallback}
                  className="h-8 w-8"
                /> */}
                {message.isLoading ? (
                  <ChatBubbleMessage isLoading />
                ) : (
                  <ChatMessage
                    message={message}
                    receiver={message.receiver === user._id}
                  />
                )}
              </div>
            ))}
          </ChatMessageList>
        </ScrollArea>
        <form
          // className="w-full absolute bottom-2 rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1 "
          onSubmit={handleSubmit}
          className="w-full"
        >
          <div className="flex items-center p-3 pt-0 absolute right-0">
            <Button variant="ghost" size="icon">
              <Paperclip className="size-4" />
              <span className="sr-only">Attach file</span>
            </Button>

            <Button variant="ghost" size="icon">
              <Mic className="size-4" />
              <span className="sr-only">Use Microphone</span>
            </Button>

            <Button size="sm" className="ml-auto gap-1.5">
              Send
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
          <Textarea
            placeholder="Type your message here..."
            className="resize-none h-4 rounded-lg bg-background border shadow-none focus-visible:ring-0"
          />
        </form>
      </div>
    </>
  );
};

export default ChatDM;
