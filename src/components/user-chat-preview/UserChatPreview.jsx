import { useState } from "react";
import { Image, Mic } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatTime } from "@/lib/utils";
import { setConversationId } from "@/redux/chat-redux/chatSlice";

import useUser from "@/hooks/use-user";
import axiosService from "@/axios";

const UserChatPreview = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const {
    data: conversations = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["conversations preview"],
    queryFn: async () => {
      const response = await axiosService.get("/conversations/last");
      return response.data;
    },
  });

  const { data: user } = useUser();

  const [activeState, setActiveState] = useState(null);

  // const resetMessageCountMutation = useMutation({
  //   mutationFn: async (chatId) => {
  //     await axiosService.patch(`/conversations/${chatId}/read`);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["conversations preview"]);
  //   },
  // });

  // console.log(conversations);

  const handlePreviewClick = (index, chat) => {
    setActiveState(index);
    dispatch(setConversationId(chat._id));
  };

  const returnOtherParticipant = (participants) => {
    return participants.find((participant) => participant._id !== user._id);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <div>
      {conversations.map((chat, index) => {
        const otherParticipant = returnOtherParticipant(chat.participants);
        // console.log("Other Participant: ", otherParticipant);

        return (
          <div
            onClick={() => handlePreviewClick(index, chat)}
            className={`flex justify-between cursor-pointer px-1 mt-2 hover:bg-blue-100 rounded-lg ${
              activeState === index && "bg-blue-200 rounded-lg"
            }`}
            key={index}
          >
            <div className="flex gap-1 my-2">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={
                    otherParticipant?.photo || "https://github.com/shadcn.png"
                  }
                />
                <AvatarFallback>
                  {otherParticipant?.name?.[0]?.toUpperCase() || "?"}
                </AvatarFallback>
              </Avatar>

              <div>
                <p className="font-semibold capitalize">
                  {otherParticipant?.name || "Unknown"}
                </p>
                {chat.messageType === "audio" ? (
                  <p className="text-sm text-slate-600 truncate w-fit max-w-[200px] flex items-center gap-1">
                    <Mic size={15} />
                    <span>Voice message</span>
                  </p>
                ) : chat.messageType === "photo" ? (
                  <p className="text-sm text-slate-600 truncate w-fit max-w-[200px] flex items-center gap-1">
                    <Image size={15} />
                    <span>Sent a photo</span>
                  </p>
                ) : (
                  <p className="text-sm text-slate-600 truncate w-fit max-w-[200px]">
                    {chat.messages[0].message || "No message"}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-1 items-center justify-center">
              <div className="text-xs">
                {formatTime(chat.messages[0].createdAt)}
              </div>

              <div className="rounded-full bg-blue-200 px-1 text-xs font-semibold text-blue-600">
                {chat.messageCount}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserChatPreview;
