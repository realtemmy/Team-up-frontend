import { UserPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import UserChatPreview from "@/components/user-chat-preview/UserChatPreview";

const ChatList = () => {
  return (
    <Tabs defaultValue="account" className="min-w-[300px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="chats">Chats</TabsTrigger>
        <TabsTrigger value="calls">Latest calls</TabsTrigger>
      </TabsList>
      <TabsContent value="chats">
        <ScrollArea>
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold text-slate-600">Latest chats</p>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <UserPlus size={18} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>New conversation</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input placeholder="Search for message or contacts" />
          </div>
          <UserChatPreview />
        </ScrollArea>
      </TabsContent>
      <TabsContent value="calls"></TabsContent>
    </Tabs>
  );
};

export default ChatList;
