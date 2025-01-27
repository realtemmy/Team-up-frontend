import { CircleAlert, CircleX, Info, Phone, Trash2, Video } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const ChatHeader = ({user}) => {
  return (
    <div className="flex justify-between items-center border rounded p-1 px-4">
      <div className="flex gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">Realtemmy</p>
          <div className="text-xs text-green-500">Online</div>
        </div>
      </div>
      <div className="flex gap-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="cursor-pointer">
              <Phone color="blue" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Make a phone call</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="cursor-pointer">
              <Video color="blue" />
            </TooltipTrigger>
            <TooltipContent>
              <p>Make a video call</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Sheet>
          <SheetTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild className="cursor-pointer">
                  <Info color="blue" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Show contact information</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="flex items-center w-full">
              <Avatar className="h-20 w-20">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <SheetTitle>Joseph McFall</SheetTitle>
              <SheetDescription>Joseph@example.com</SheetDescription>
              <div className="grid grid-cols-2 gap-4 w-full">
                <Button
                  variant="secondary"
                  className="col-span-2 md:col-span-1"
                >
                  <Phone /> Audio call
                </Button>
                <Button
                  variant="secondary"
                  className="col-span-2 md:col-span-1"
                >
                  <Video /> Video call
                </Button>
              </div>
            </SheetHeader>
            <div className="mb-4">
                {/* media, files, notifications, disappearing messages */}
            </div>
            <div className="block">
              <div className="flex items-center gap-4 font-semibold text-red-600 mb-2">
                <CircleX size={20} color="red" /> <span>Block user</span>
              </div>
              <div className="flex items-center gap-4 font-semibold text-red-600 mb-2">
                <CircleAlert size={20} color="red" /> <span>Report user</span>
              </div>
              <div className="flex items-center gap-4 font-semibold text-red-600">
                <Trash2 size={20} color="red" /> <span>Delete chat</span>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ChatHeader;
