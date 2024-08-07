/* eslint-disable react/no-unescaped-entities */
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import UserHeaderProfile from "../user-header-profile/UserHeaderProfile";
import { Send } from "lucide-react";

const ChatDM = () => {
  // Show a default design like "start a chat or something at first" then change when a chat is selected
  // Get messages using friends id
  const id = "234";
  const messages = [
    {
      userId: "123",
      message: "How far guy",
    },
    {
      userId: "234",
      message: "I'm good man, what's up chief",
    },
    {
      userId: "123",
      message: "I'm good too, how e dey be for your side",
    },
    {
      userId: "234",
      message:
        "Same as usual bro, was thinking about calling you one of these days",
    },
    {
      userId: "123",
      message: "Yeah, since it's been more than a while",
    },
    {
      userId: "234",
      message:
        "Actually, we should hang out one of these days, for old time sake.",
    },
    {
      userId: "123",
      message: "Yeah sure, make we arrange match as usual",
    },
    {
      userId: "234",
      message: "Sure, make I deal with you as usual",
    },
    {
      userId: "123",
      message: "Haha, you wish",
    },
    {
      userId: "234",
      message: "Oya na boss, let's see how it goes",
    },
    {
      userId: "123",
      message: "My man, sure.",
    },
  ];
  const sendMessage = (event) => {
    event.preventDefault();
  };
  return (
    <div className="overflow-y-hidden m-0 p-0">
      <UserHeaderProfile />
      <div className="col-span-2 border">
        <ScrollArea className="h-[calc(100vh-110px)] w-full border-t px-2">
          <div className="flex flex-col">
            {messages.map((message, idx) => (
              <div
                key={idx}
                style={{
                  maxWidth: "75%",
                  width: "fit-content",
                  display: "inline-block",
                }}
                className={`mb-2 bg-gray-700 rounded text-white p-2 first:mt-2 ${
                  message.userId === id && "self-end"
                }`}
              >
                {message.message}
              </div>
            ))}
          </div>
        </ScrollArea>
        <form
          style={{
            height: "50px",
          }}
          className="flex gap-2 py-1 rounded bottom-10 px-2"
          onSubmit={sendMessage}
        >
          <input
            type="text"
            name="message"
            className="border shadow w-full rounded px-2 outline-none"
            placeholder="Type message..."
          />
          {/* <textarea
            name="message"
            id="message"
            className="border shadow w-full rounded px-2 outline-none"
            cols="30"
            rows="10"
          /> */}
          <Button className="bg-teal-600 h-full" size="sm">
            <Send />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatDM;
