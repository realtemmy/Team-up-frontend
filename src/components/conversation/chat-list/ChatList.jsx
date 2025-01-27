import { useState } from "react";
import { UserPlus } from "lucide-react";
import { useQuery } from "react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { Button } from "@/components/ui/button";
import UserCard from "@/components/user-card/UserCard";
import UserChatPreview from "@/components/user-chat-preview/UserChatPreview";

import axiosService from "@/axios";

const ChatList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Query to fetch all users initially
  const { data: allUsers = [], isLoading: loadingUsers } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axiosService.get("/user/other-users");
      return response.data;
    },
  });

  // Query to fetch search results dynamically
  const { data: searchResults = [], isLoading: loadingSearch } = useQuery({
    queryKey: ["search", searchTerm],
    queryFn: async () => {
      const response = await axiosService.get(
        `/user/search?search=${searchTerm}`
      );
      return response.data;
    },
    enabled: !!searchTerm,
  });

  const isLoading = loadingUsers || loadingSearch;

  const displayedData = searchTerm ? searchResults : allUsers;

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
                        <Input
                          placeholder="Search for contacts by name or email."
                          onChange={handleSearchChange}
                          value={searchTerm}
                        />
                      </div>

                      {isLoading ? (
                        <p>Loading...</p>
                      ) : (
                        <ScrollArea className="h-[calc(100vh - 200px) rounded-md w-full">
                          {displayedData.length > 0 ? (
                            displayedData.map((user, index) => (
                              <UserCard key={index} user={user} />
                            ))
                          ) : (
                            <p className="text-gray-500 text-center">
                              No users found.
                            </p>
                          )}
                        </ScrollArea>
                      )}
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
