import { UserPlus } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import UserChatPreview from "@/components/user-chat-preview/UserChatPreview";
import { Button } from "@/components/ui/button";

const ChatList = () => {
  return (
    <Tabs defaultValue="chats" className="min-w-[300px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="chats">Chats</TabsTrigger>
        <TabsTrigger value="calls">Latest calls</TabsTrigger>
      </TabsList>
      <TabsContent value="chats">
        <ScrollArea>
          <div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold text-slate-600">Latest chats</p>
              <Dialog>
                <DialogTrigger>
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
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>New message</DialogTitle>
                    <DialogDescription>
                      <div className="my-4">
                        <Input placeholder="Search for contacts" />
                      </div>

                      <ScrollArea className="h-[calc(100vh - 200px) rounded-md w-full">
                        <div className="flex items-center gap-2 mb-2 cursor-pointer">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-slate-700">
                              Jese Leos
                            </p>
                            <p className="text-xs">jeseleos@example.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2 cursor-pointer">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-slate-700">
                              Bonnie Green
                            </p>
                            <p className="text-xs">bonniegreen@example.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2 cursor-pointer">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-slate-700">
                              Josaph McFall
                            </p>
                            <p className="text-xs">joseph@example.com</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 mb-2 cursor-pointer">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-slate-700">
                              Jesley Livingston
                            </p>
                            <p className="text-xs">
                              jesleylivingstone@example.com
                            </p>
                          </div>
                        </div>
                      </ScrollArea>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-between">
                    <Button>New chat</Button>
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Close
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <Input placeholder="Search for message or contacts" />
          </div>
          <UserChatPreview />
        </ScrollArea>
      </TabsContent>
      <TabsContent value="calls">
        <ScrollArea>
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold text-slate-600">Latest calls</p>
          </div>
        </ScrollArea>
      </TabsContent>
    </Tabs>
  );
};

export default ChatList;
