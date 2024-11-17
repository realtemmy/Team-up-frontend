import { useSelector } from "react-redux";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
} from "@/components/ui/chat/chat-bubble";
import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Copy, CornerDownLeft, Mic, Paperclip, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chat = () => {
  const { showDM, showProfile } = useSelector((state) => state.chat);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // when its less than tablet and showDM is true, display only the dm, else display the chatlist
  const messages = [
    {
      variant: "sent",
      text: "Hello, how has your day been? I hope you are doing well.",
      fallback: "US",
    },
    {
      variant: "received",
      fallback: "RC",
      text: "Hi, I am doing well, thank you for asking. How can I help you today?",
    },
    {
      variant: "received",
      fallback: "RC",
      isLoading: true,
    },
  ];

  const actionIcons = [
    { icon: Copy, type: "Copy" },
    { icon: RefreshCcw, type: "Regenerate" },
  ];

  return (
    <>
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
                <ChatBubbleMessage
                  variant={message.variant}
                  className={`my-2 rounded-lg ${
                    message.variant === "sent"
                      ? "rounded-br-none"
                      : "rounded-bl-none"
                  }`}
                >
                  {message.text}
                </ChatBubbleMessage>
              )}
            </ChatBubble>
          </div>
        ))}
      </ChatMessageList>

      <form
        className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
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
    </>
  );
};

export default Chat;
