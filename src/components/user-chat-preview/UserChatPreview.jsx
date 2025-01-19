import { Image, Mic } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserChatPreview = () => {
  const chats = [
    {
      name: "Lesley Livingston",
      user: "123",
      messageType: "text",
      typing: false,
      message: "Yes, we can do this.",
      messageCount: 0,
    },
    {
      name: "Roberta Cacas",
      user: "123",
      messageType: "audio",
      typing: false,
      message: "",
      messageCount: 0,
    },
    {
      name: "Neil Sims",
      user: "123",
      messageType: "text",
      typing: false,
      message: "Nevermind, I'd grab the items on the way",
      messageCount: 4,
    },
    {
      name: "Micheal Gough",
      user: "123",
      messageType: "photo",
      typing: false,
      message: "",
      messageCount: 0,
    },
    {
      name: "Bonnie Green",
      user: "123",
      messageType: "text",
      typing: false,
      message: "Yes, we can do this.",
      messageCount: 0,
    },
  ];
  // When I click on a chat, clear the messageCount to zero and find a way to set the message to load in the chatdm
  return (
    <div>
      {chats.map((chat, index) => (
        <div className="flex justify-between cursor-pointer" key={index}>
          <div className="flex gap-1 my-2">
            <Avatar className="h-10 w-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold">{chat.name}</p>
              {chat.messageType === "audio" ? (
                <p className="text-sm text-slate-600 truncate w-fit max-w-[200px] flex items-center gap-1">
                  <span>
                    <Mic size={15} />
                  </span>
                  <span>Voice message</span>
                </p>
              ) : chat.messageType === "photo" ? (
                <p className="text-sm text-slate-600 truncate w-fit max-w-[200px] flex items-center gap-1">
                  <span>
                    <Image size={15} />
                  </span>
                  <span>Sent a photo</span>
                </p>
              ) : (
                <p className="text-sm text-slate-600 truncate w-fit max-w-[200px]">
                  {chat.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center">
            <div className="text-xs">18:05</div>
            {chat.messageCount > 0 ? (
              <div className="rounded-full bg-blue-200 px-1 text-xs font-semibold text-blue-600">
                {chat.messageCount}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserChatPreview;
