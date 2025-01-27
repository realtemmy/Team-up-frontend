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

  const { data: user } = useUser();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // Get chats when a user clicks on a chat
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["messages", conversationId],
  //   queryFn: async () => {
  //     const response = await axiosService.get(
  //       `/conversations/${conversationId}`
  //     );
  //     return response.data;
  //   },
  //   enabled: !!conversationId,
  // });

  // console.log("data: ", data);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return <div>Error...</div>;

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
